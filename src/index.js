#!/usr/bin/env node

/**
 * This makes it possible to execute this project without the node command. See it has
 * already been added in the command #!/usr/bin/env node. 
 * */
const fs = require('fs');

const content = require('./files-content');

//* create store dir if it doesn't exist'
console.log('creating configStore.js file...');
const storeDir = "store"
!fs.existsSync(storeDir) && fs.mkdirSync(storeDir);
//* create configStore.js file
fs.writeFileSync('store/configStore.js', content.configStore);

//* create stor/reducers dir if it doesn't exist'
console.log('creating reducers/index.js file...');
const reducersDir = "store/reducers";
fs.existsSync(storeDir) && !fs.existsSync(reducersDir) && fs.mkdirSync(reducersDir);
//* create reducers/index.js file
fs.writeFileSync('store/reducers/index.js', content.reducersIndex);

//* create stor/actions dir if it doesn't exist'
console.log('creating actions/index.js file...');
const actionsDir = "store/actions";
fs.existsSync(storeDir) && !fs.existsSync(actionsDir) && fs.mkdirSync(actionsDir);
//* create actions/index.js file
fs.writeFileSync('store/actions/index.js', content.actionsIndex);

//* connect redux with React index.js file
const srcDir = "src";
if (fs.existsSync(srcDir) && process.argv[2] === '--index') {
  console.log('connecting redux with React index.js file...');
  fs.writeFileSync('src/index.js', content.reactIndexJS);
};