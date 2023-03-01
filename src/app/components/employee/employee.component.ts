import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  listEmployees: Employee [] = [
    {
      name: 'Juanma',
      surname: 'Molins',
      sex: 'Masculino',
      salary: 1600
    },
    {
      name: 'Carolina',
      surname: 'Pérez',
      sex: 'Femenino',
      salary: 2000
    },
    {
      name: 'Marcos',
      surname: 'Gonzalez',
      sex: 'Masculino',
      salary: 3000
    },
    {
      name: 'Marta',
      surname: 'Garcia',
      sex: 'Femenino',
      salary: 1500
    }
  ];

  public radioButtonSelected: string = 'Todos';

  constructor() {
  }

  ngOnInit(): void {
  }

  getEmployeesList() { return this.listEmployees.length; }
  getEmployeesListMale() { return this.listEmployees.filter( employee => employee.sex === 'Masculino' ).length; }
  getEmployeesListFemale() { return this.listEmployees.filter( employee => employee.sex === 'Femenino' ).length; }

  countRadioButtonChange( radioButtonSelect: string ):void {
    this.radioButtonSelected = radioButtonSelect;
  }
}
