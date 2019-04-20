# react-environments
this package really helps creating multiple environments in react js projects like we have in angular projects

<i>Auther : Anuj Sharma</i>

# installing the project
<code>npm install --save react-environments </code>

# setting up environment files under /src/environments/ 
naming convention is very strict to be like environment.prod.js, environment.dev.js , environment.qa.js, environment.pilot.js etc

content should be like this  ->
<pre>
 -->src
    --> environment.js      ....this file is mandatory to be there and be like other files which can have all the possible properties 
    --> environment.dev.js
    --> environment.prod.js
    --> environment.qa.js

</pre>
<br/>
 content of any environment file like below ..
 <br/>
 environment.qa.js
 <pre>
    module.exports = {
     "baseUrl": "url qa",
     "systemName": "System QA",
     "settings": {
        "name": "test QA",
        "age": 14
     }
    } 
 </pre>
 <br/>
 environment.js
 <pre>
    module.exports = {
     "baseUrl": "url dev",
     "systemName": "System dev",
     "settings": {
        "name": "test dev",
        "age": 11
     }
    } 
 </pre>


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

# using in component
<code>
import environment from './environments/environment';
</code>
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

<br/>
<br/>
<br/>
---
<br/>
Happy coding!!
<br/>
<i>Anuj Sharma</i>

