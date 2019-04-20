# react-environments
this package really helps creating multiple environments in react js projects like we have in angular projects

# installing the project
<code>npm install --save react-environments </code>

# using in code
<code>
import environment from './environments/environment';
</code>
<br/>

# using environment in component
<pre>
  render(){
    return(
        <div>
          {JSON.stringify(environment)}  
        </div>
    );
  }
</pre>
<br/>

# Settings up package.json
just add <code>prestart</code> and <code>prebuild</code> command as below 
<br/>
<pre>
  "scripts": {
      "prestart": "node node_modules/react-environments --path=src/environments",
      "prebuild": "node node_modules/react-environments --path=src/environments",
      .......
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
   },
</pre>

# running project inside of an environment 
its mandatory to pass --env=qa | prod | dev etc whatever we need to use environment <br/>
 <br/>
like for qa environment --> <br/>
<code>
  npm start --env=qa
</code>
<br/>
 <br/>
for prod environment --> <br/>
<code>
  npm start --env=prod
</code>
<br/>
 <br/>
for dev environment --> <br/>
<code>
  <br/>
  npm start --env=dev
</code>
<br/>


# creating build with an environment 
its mandatory to pass --env=qa | prod | dev etc whatever we need to use environment <br/>
 <br/>
like for qa environment --> <br/>
<code>
  npm run build --env=qa
</code>
<br/>
 <br/>
for prod environment --> <br/>
<code>
  npm run build --env=prod
</code>
<br/>
 <br/>
for dev environment --> <br/>
<code>
  <br/>
  npm run build --env=dev
</code>
<br/>
