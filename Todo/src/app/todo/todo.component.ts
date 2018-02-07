import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  str: string;
  st:string;
  lastId: number = 0;
  ide:number;
  sers=[];
  coplte:boolean=false;
  filter: boolean= false;
  constructor() { }

  ngOnInit() {
  }
  todoDetails()
  {
   this.st=this.str;
   if(this.st!=null)
   {
   this.sers.push({id:++this.lastId,name:this.st,checked:this.coplte});
   this.str=null;
   }
   else{
     alert("Enter Something To Continue...")
   }
  }

  isSelected(ser){
      ser.checked=!ser.checked
  }
}
