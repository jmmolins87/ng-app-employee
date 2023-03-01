import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.scss']
})
export class CountEmployeeComponent implements OnInit {

  @Input() allEmployees: number; 
  @Input() allEmployeesMales: number;
  @Input() allEmployeesFemales: number;

  @Output() countRadioButtonChange = new EventEmitter<string>();

  public radioButtonSelected: string = 'Todos';

  constructor() {
    this.allEmployees = 0;
    this.allEmployeesMales = 0;
    this.allEmployeesFemales = 0;  
  }

  ngOnInit(): void {
  }

  radioChange() {
    this.countRadioButtonChange.emit( this.radioButtonSelected );
  }

}
