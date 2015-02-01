## CalMedX
A team project for CS6440: Developing an intuitive EHR dashboard with better workflow to improve physicians' productivity.

## DEMO
[http://calmedx.khoitran.me/](http://calmedx.khoitran.me/)

## FEATURES
The site is still under active development.

## INSTALL
* Git clone or download and unzip.
* Open index.html and you are good to go.

## DEVELOPMENT
The app is developed using [ReactJS](https://github.com/reactjs/). Everything should be compiled into js files are deployed as a static site. We will develop a different component to wire in meaningful data through REST API later.

* Git clone the repro.
* Install [npm](http://nodejs.org/download/).
* Install jsx (to compile jsx files into js files)
``` 
	npm install -g react-tools
```		
* Navigate to your local repo and run
```
	jsx --watch reactjs/ reactjs_build/
```
* You are ready to go, you can modify index.html and any files under reactjs at will. The command entered earlier will monitor any changes and rebuild output file right away.
* Use ```reactjs/medications.js``` as a template to build out more panels.


