export class Employee {
    name: string;
    surname: string;
    sex: string;
    salary: number;

    constructor( dossier: number, name: string, surname: string, sex: string, salary: number ) {
        this.name = name;
        this.surname = surname;
        this.sex = sex;
        this.salary = salary;
    }
}