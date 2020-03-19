let watch = require('node-watch');
let path = require('path');
let fs = require('fs');
const args = require('minimist')(process.argv.slice(2));



let env = (args.env || process.env.npm_config_env || 'dev'), envPath = (args.path || 'src/environments');
let isBuild = (args.build || process.env.npm_config_build || false);
if (!args || !env) {
   throw new Error('Enviroment variable not passed. pass like --env = ABC');
}

const envfile = path.join(__dirname, `../../${envPath}/environment.js`);
const desiredEnvFile = path.join(__dirname, `../../${envPath}/environment.${env}.js`);

if (!isBuild) {
   let watcher = watch([desiredEnvFile], { persistent: true, recursive: false },
      (ev, name) => {
      });

   watcher.on('change', (evt, name) => {
      changeFile();
   });
   process.on('SIGINT', watcher.close);
}

const changeFile = () => {

   const destinationFile = require(envfile);
   const sourceFile = require(desiredEnvFile);
   let allProps = Object.assign({}, destinationFile, sourceFile);

   allProps = 'module.exports = ' + JSON.stringify(allProps, null, 4);

   fs.writeFile(envfile, allProps, (err) => {
      if (err) throw err;
      console.log(`${env} environment file Saved!`);
   })
}
changeFile();
