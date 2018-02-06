import { Injectable } from '@angular/core';

const employees = [
  {
      id: 1,
      name: 'Anu Raj',
      designation: 'Developer',
      company: 'SST'
  },
  {
    id: 2,
    name: 'Santosh Kumar',
    designation: 'Supervisor',
    company: 'KTS'
  },
  {
    id: 3,
    name: 'Jo Mohan',
    designation: 'Tester',
    company: 'CTS'
  },
  {
    id: 4,
    name: 'Manoj KK',
    designation: 'Lead',
    company: 'CCS'
  },
];

@Injectable()
export class EmployeeService {

  private employees;

  constructor() {
    this.employees = employees;
   }

   getEmployees() {
     return this.employees;
   }

}
