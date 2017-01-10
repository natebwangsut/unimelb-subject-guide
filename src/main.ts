//import * as url from 'url';
//import * as http from 'http';

import {sayHello} from "./greet";
import * as sub from "./subject";

function showHello(divName : string, name: string) {
  let elt = document.getElementById(divName);
  elt.innerHTML = sayHello(name);
}

function loadSubjects(divName : string) {
  let elt = document.getElementById(divName);
  let subject = sub.default;
  elt.innerHTML = subject.load_subject('2017', 'comp10001');
}

showHello("greeting", "TypeScript");
//loadSubjects("subject");