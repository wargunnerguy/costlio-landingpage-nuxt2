#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'costl.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wargunnerguy/costlio-landingpage-nuxt2.git master:gh-pages

cd -
