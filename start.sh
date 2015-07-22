#!/bin/sh

ROOT=`pwd`

echo "Install dependencies into app/"
cd $ROOT/app && npm install
echo

echo "Install dependencies into shared/lib/immu1"
cd $ROOT/shared/lib/immu1 && npm install
echo

echo "Install dependencies into shared/lib/immu2"
cd $ROOT/shared/lib/immu2 && npm install
echo

echo "Create symlinks app/shared -> shared/, immu2 -> immu1"
cd $ROOT
ln -sf ../../shared ./app/node_modules/shared
ln -sf ../../immu1 ./shared/lib/immu2/node_modules/immu1
echo

echo "Run test"
cd $ROOT/app
node ./index.js
