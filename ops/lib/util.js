

var _capitalizeEachWord = (str) => {
    var index, word, words, _i, _len;
    words = str.split(" ");
    for (index = _i = 0, _len = words.length; _i < _len; index = ++_i) {
      word = words[index].charAt(0).toUpperCase();
      words[index] = word + words[index].substr(1);
    }
    return words.join(" ");
}
exports.capitalizeEachWord = _capitalizeEachWord;

var _namerize = (str) => {
    var name = str.replace(/[_-]/g, " ");
    return _capitalizeEachWord(name);
}
exports.namerize = _namerize;

exports.camelize = (str) => {
    var words;
    words = _namerize(str).split(" ");
    words[0] = words[0].toLowerCase();
    return words.join("");
}

exports.underscorize = (str) => {
    return str.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '_' : '') + char.toLowerCase();
    });
}

exports.dasherize = (str) => {
    return str.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
}


exports.capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
