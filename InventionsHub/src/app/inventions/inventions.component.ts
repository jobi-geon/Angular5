import { Component, OnInit } from '@angular/core';

// add a new class  -- done in previous part of tutorial  
export class Invention {
    name : String ; 
    inventor : String ; 
    year : String; 
}


@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css']
})



export class InventionsComponent implements OnInit {

// declare nameModel , inventorModel , yearModel strings to help with adding new inventions 
// make inventions an array to show multiple inventions 
  nameModel : String; 
  inventorModel : String; 
  yearModel : String; 
  inventions : Invention[]; 


    
  constructor() { 
// initialize model values to '' 
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';

// add the invention to inventions array 
    this.inventions = [  ]; 
  }

  ngOnInit() {
  }


// add create Invention function for adding new inventions 

  createInvention(){

    // initialize a new invention using data coming from template [ using 2 way data binding ]
    let newInvention : Invention = {
      name: this.nameModel , 
      inventor : this.inventorModel , 
      year : this.yearModel
    };
    
    // push the newly created Invention object to inventions array 
    this.inventions.push( newInvention ); 

    // set the model values to '' again 
    this.nameModel = this.yearModel = this.inventorModel = ''; 
  }

  deleteInvention(name){
      for (var _i = 0; _i < this.inventions.length; _i++) {
       if(this.inventions[_i].name == name){
        this.inventions.splice(_i, 1);
       }
    }

  }

}

