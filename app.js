let path = require('path');
let fs = require('fs');

const args = require('minimist')(process.argv.slice(2));

let env = (args.env || process.env.npm_config_env), envPath = (args.path || "src/environments");

if (!args || !env) {
   throw new Error("Enviroment variable not passed. pass like --env = ABC");
}

const envfile = path.join(__dirname, `../../${envPath}/environment.js`);

const destinationFile = require(envfile);
const desiredEnvFile = path.join(__dirname, `../../${envPath}/environment.${env}.js`);

let sourceFile = require(desiredEnvFile);

let allProps = Object.assign({}, destinationFile, sourceFile);

allProps = "module.exports = " + JSON.stringify(allProps);

fs.writeFile(envfile, allProps, (err) => {
   if (err) throw err;
   console.log('Saved!');
})