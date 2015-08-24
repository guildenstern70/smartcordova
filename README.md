# Smart Cordova

A demo app with Apache Cordova, Backbone, Zurb and NunJucks

## Frameworks needed (Node.js)

#### Bower

    npm install -g bower

#### Gulp

    npm install -global gulp
    npm install -save--dev gulp

#### Apache Cordova

    npm install -g cordova

## JavaScript libraries needed (bower install)

- Zurb foundation
- NunJucks
- Backbone

## Setup and build

###Build:

    npm install
    cd app
    bower install
    gulp dist

###iOS Run:

    cordova platform add ios
    cordova emulate ios
    
###Android Run:

    cordova platform add android
    cordova emulate android
    
    

See also: 

- <http://engineroom.teamwork.com/hassle-free-third-party-dependencies/>
- <http://mherman.org/blog/2014/08/14/kickstarting-angular-with-gulp/#.VUjfWNOqqkp>
- NunJucks, <https://mozilla.github.io/nunjucks/>
- Backbone, <http://backbonejs.org/>
.


