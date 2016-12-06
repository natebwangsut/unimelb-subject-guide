//import * as url from 'url';
//import * as http from 'http';

import {sayHello} from "./greet";

function showHello(divName : string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerHTML = sayHello(name);
}

function loadSubjects(divName : string, url: string) {

}

showHello("greeting", "TypeScript");