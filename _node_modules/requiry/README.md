# Requiry

<!--resolve,main,extensions,registerExtension,cache-->

[![NPM Version](https://badge.fury.io/js/requiry.png)](http://badge.fury.io/js/requiry)
[![Build Status](https://travis-ci.org/zerious/requiry.png?branch=master)](https://travis-ci.org/zerious/requiry)
[![Code Coverage](https://coveralls.io/repos/zerious/requiry/badge.png?branch=master)](https://coveralls.io/r/zerious/requiry)
[![Dependencies](https://david-dm.org/zerious/requiry.png?theme=shields.io)](https://david-dm.org/zerious/requiry)
[![Support](http://img.shields.io/gittip/zerious.png)](https://www.gittip.com/zerious/)

Requiry checks process.env.NODE_ENV, and if you are in a "dev" environment, it
will auto-install packages when you `require` packages that are not installed.

## Installation

In your project directory, run:
```bash
npm i --save requiry
```

## Getting Started

To use Requiry, you simply need to require it, then require a package which may
or may not be installed.
```javascript
require('requiry');

var something = require('something');
```

If you run your application without specifying an environment, or specifying
an environment other than "dev", the `require` function will operate as usual,
triggering a `MODULE_NOT_FOUND` error if `something` isn't installed.  However,
if you run in "dev" mode, it will install `something` for you.
```bash
NODE_ENV=dev node app


```

## API

### .setLogger(logger)
You can make requiry use a custom logger by passing it in.

### .enable(boolean)
If you would like to disable Requiry, even in "dev" mode, you can call
`requiry.enable(false)`.
