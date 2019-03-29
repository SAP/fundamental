#! /bin/bash

set -e

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

# delete temp branch
git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" ":$TRAVIS_BRANCH" > /dev/null 2>&1;

std_ver=$(npm run std-version)
release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

echo "$std_ver"

git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" master > /dev/null 2>&1;

npm run release:create -- --repo $TRAVIS_REPO_SLUG --tag $release_tag --branch master

#build dist folder
npm run build -- --production

npm publish

npm run docs
npm run deploy -- --repo "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG"
