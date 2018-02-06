import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
   }

  ngOnInit() {
  }

  onSelect(employee: Employee) { this.selectedEmployee = employee; }
}
