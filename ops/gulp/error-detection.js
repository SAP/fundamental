const read = require('read-file');
const htmlparser = require('htmlparser2');
const glob = require('glob')
const signale = require('signale');

const gulp = require('gulp');
const task = (cb) => {
    glob('./docs/pages/components/*.md', (er, files) => {
        if (files.length === 0) return signale.warn('Sorry no files found.');
        if (er) return signale.error(er);

        const idsArray = [];

        const checkParsedFiles = () => {
            const errors = new Map([...new Set(idsArray)].map(
                x => [x, idsArray.filter(y => y === x).length]
            ));
            let numOfErrors = 0;
            errors.forEach((v, k) => {
                if (v > 2) {
                    numOfErrors++;
                    signale.warn(`Duplicate ids detected. ${k} appears in your examples ${v} times`);
                }
            });
            if (numOfErrors) {
                cb();
                signale.error('Please fix the issues above');
                process.exit(-1);
            }
        }

        let itemsProcessed = 0;

        files.forEach((file, idx, array) => {
            read(file, 'utf8', (err, buffer) => {

                if (err) return signale.error(er);

                const fileContents = buffer.replace(/`/g, '');

                const parser = new htmlparser.Parser({
                    onopentag(name, attribs) {
                        if (attribs['aria-controls'] !== undefined) {
                            // signale.info('aria-controls', attribs['aria-controls']);
                            idsArray.push(attribs['aria-controls']);
                        }

                        if (attribs['id'] !== undefined && attribs['id'] !== '') {
                            // signale.info('id', attribs['id']);
                            idsArray.push(attribs['id']);
                        }
                    }
                }, {
                    decodeEntities: true
                });
                parser.write(fileContents);

                itemsProcessed++;
                if (itemsProcessed === array.length) {
                    checkParsedFiles();
                    cb();
                }

                parser.end();
            });
        });
    });
}

gulp.task('error-detection', task);
module.exports = task;