//import * as url from 'url';
//import * as http from 'http';
"use strict";
const greet_1 = require("./greet");
const sub = require("./subject");
function showHello(divName, name) {
    let elt = document.getElementById(divName);
    elt.innerHTML = greet_1.sayHello(name);
}
function loadSubjects(divName) {
    let elt = document.getElementById(divName);
    let subject = sub.default;
    elt.innerHTML = subject.load_subject('2017', 'comp10001');
}
showHello("greeting", "TypeScript");
//loadSubjects("subject"); 
