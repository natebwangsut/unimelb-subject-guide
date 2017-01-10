import * as request from 'request';

const KEY_WORDS = ['COMP', 'SWEN', 'INFO'];
const COMP_SUBJECT = ['10001', '10002', '20003', '20007', '30026'];

export interface ISubject {
    load_subject(year: string, subjectCode: string): string;
}

export class Subject implements ISubject {
    public load_subject(year: string, subjectCode: string): string {
        let uri = 'handbook.unimelb.edu.au';
        let directory = '/view/';
        console.log(uri + directory + year + subjectCode);
        return request({
            method: 'GET',
            uri: uri + directory + year + subjectCode
        }).toString();
    }
}

let subject: Subject = new Subject();
export default subject;