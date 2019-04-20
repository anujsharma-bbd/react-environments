let path = require('path');
let fs = require('fs');
const envfile = path.join(__dirname, '/environments/environment.js');
const destinationFile = require(envfile);

const args = require('minimist')(process.argv.slice(2));
console.log("react-env args:", args);
if (!args || !args.env) {
   throw new Error("Enviroment variable not passed. pass liek --env = ABC");
}
let env = args.env;
console.log("react-env env:", env);
const desiredEnvFile = path.join(__dirname, '/environments/environment.' + env + '.js');
let sourceFile = require(desiredEnvFile);
let allProps = Object.assign({}, destinationFile, sourceFile);
allProps = "module.exports = " + JSON.stringify(allProps);

fs.writeFile(envfile, allProps, (err) => {
   if (err) throw err;
   console.log('Saved!');
})