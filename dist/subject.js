"use strict";
const request = require("request");
const KEY_WORDS = ['COMP', 'SWEN', 'INFO'];
const COMP_SUBJECT = ['10001', '10002', '20003', '20007', '30026'];
class Subject {
    load_subject(year, subjectCode) {
        let uri = 'handbook.unimelb.edu.au';
        let directory = '/view/';
        console.log(uri + directory + year + subjectCode);
        return request({
            method: 'GET',
            uri: uri + directory + year + subjectCode
        }).toString();
    }
}
exports.Subject = Subject;
let subject = new Subject();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = subject;
