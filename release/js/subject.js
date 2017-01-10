"use strict";
var request = require("request");
var KEY_WORDS = ['COMP', 'SWEN', 'INFO'];
var COMP_SUBJECT = ['10001', '10002', '20003', '20007', '30026'];
var Subject = (function () {
    function Subject() {
    }
    Subject.prototype.load_subject = function (year, subjectCode) {
        var uri = 'handbook.unimelb.edu.au';
        var directory = '/view/';
        return request({
            method: 'GET',
            uri: uri + directory + year + subjectCode
        }).toString();
    };
    return Subject;
}());
exports.Subject = Subject;
var subject = new Subject();
exports.__esModule = true;
exports["default"] = subject;
