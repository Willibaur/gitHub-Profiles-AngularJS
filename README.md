
[![Build Status](https://travis-ci.org/Willibaur/gitHub-Profiles-AngularJS.svg?branch=master)](https://travis-ci.org/Willibaur/gitHub-Profiles-AngularJS)  
--------------------------------

GitHub Profile Search
=================

Basic GitHub profile search, returns username profile info.

It was written in JavaScript as single page application SAP, thanks to AngularJS, using TDD and BDD.


Technologies used
-----------------

  * Testing
    * Karma-Jasmine
    * Protractor

  * Back end framework
    * JavaScript
    * node.js
    * Bower

  * Front end framework
    * AngularJS


Setting up testing environment
------------------------------

In order to play around with this app you need to clone the repo shown below and
execute the following commands to be functional.

```sh
$ git clone git@github.com:Willibaur/gitHub-Profiles-AngularJS.git
$ cd gitHub-Profiles-AngularJS
$ bower install
$ npm install
```

If you want to run all tests written previously for the backend, you need to
execute:

```sh
$ npm test
```

If you want to run all tests written previously for the frontend, you need to
execute:

```sh
$ protractor test/e2e/conf.js
```

Running the app
---------------

You need to start the server before running the app, it will be served on your
port number 8080.

```sh
$ npm start
```

Then you can go on your browser:

`localhost:8080`


Contributors
------------

* [William Bautista](https://github.com/Willibaur)
