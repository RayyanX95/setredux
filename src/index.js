#!/usr/bin/env node

const fs = require('fs');
const { exit } = require('process');

const content = require('./files-content');

const storeDir = "store";

if (!process.argv.includes('init')) {
  const packageFile = fs.readFileSync('./package.json', 'utf8');
  const { version } = JSON.parse(packageFile);
  console.log(version);
  console.log("try: setredux init");
  exit(0);
}

exit(0);

//* create store dir if it doesn't exist';
createStoreDir();

//* create stor/reducers dir if it doesn't exist'
createReducersDir();

//* create stor/actions dir if it doesn't exist'
createActionDir();

//* connect redux with React index.js file
connectStoreToReact();


/** Functions bodies */

function createStoreDir() {
  console.log('creating configStore.js file...');
  !fs.existsSync(storeDir) && fs.mkdirSync(storeDir);
  //* create configStore.js file
  if (process.argv.includes('--thunk')) {
    fs.writeFileSync('store/configStore.js', content.configStoreThunk);
  } else {
    console.log(process.argv);
    fs.writeFileSync('store/configStore.js', content.configStore);
  }
};

function createReducersDir() {
  console.log('creating reducers/index.js file...');
  const reducersDir = "store/reducers";
  fs.existsSync(storeDir) && !fs.existsSync(reducersDir) && fs.mkdirSync(reducersDir);
  //* create reducers/index.js file
  fs.writeFileSync('store/reducers/index.js', content.reducersIndex);
};

function createActionDir() {
  console.log('creating actions/index.js file...');
  const actionsDir = "store/actions";
  fs.existsSync(storeDir) && !fs.existsSync(actionsDir) && fs.mkdirSync(actionsDir);
  //* create actions/index.js file
  fs.writeFileSync('store/actions/index.js', content.actionsIndex);
};

function connectStoreToReact() {
  const srcDir = "src";
  if (fs.existsSync(srcDir) && process.argv.includes('--connect')) {
    console.log('connecting redux with React index.js file...');
    fs.writeFileSync('src/index.js', content.reactIndexJS);
  };
};