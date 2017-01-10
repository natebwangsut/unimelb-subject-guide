//import * as url from 'url';
//import * as http from 'http';
"use strict";
var greet_1 = require("./greet");
var sub = require("./subject");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerHTML = greet_1.sayHello(name);
}
function loadSubjects(divName) {
    var elt = document.getElementById(divName);
    var subject = sub["default"];
    elt.innerHTML = subject.load_subject('2017', 'comp10001');
}
showHello("greeting", "TypeScript");
loadSubjects("subject");
