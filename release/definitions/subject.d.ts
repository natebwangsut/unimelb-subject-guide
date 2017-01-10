export interface ISubject {
    load_subject(year: string, subjectCode: string): string;
}
export declare class Subject implements ISubject {
    load_subject(year: string, subjectCode: string): string;
}
declare let subject: Subject;
export default subject;
