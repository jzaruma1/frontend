export class Employee {
    constructor(_id = '', name = '', position = '', office = '', salary = 0.00) {
        this._id = _id;
        this.name = name;
        this.office = office;
        this.position = position;
        this.salary = salary;
    }
    _id: string;
    name: string;
    position: string;
    office: string;
    salary: Number;
}
