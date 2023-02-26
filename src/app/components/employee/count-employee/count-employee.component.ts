import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.scss']
})
export class CountEmployeeComponent implements OnInit {

  @Input() allEmployees: number; 
  @Input() allEmployeesMales: number;
  @Input() allEmployeesFemales: number;

  public radioButtonSelected: string = 'Todos';

  constructor() {
    this.allEmployees = 0;
    this.allEmployeesMales = 0;
    this.allEmployeesFemales = 0;
  }

  ngOnInit(): void {
    console.log( this.allEmployees );
  }

}
