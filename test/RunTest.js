#! /usr/bin/env node
var libSwigCNodejs = require('../swig/.libs/libSwigCNodejs');
let test = new libSwigCNodejs.Test;

var fnName = function () {
  console.log("fnName executing");
}

test.setupCallback();
