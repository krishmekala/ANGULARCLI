import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css']
})
export class NewheaderComponent {
  concept:string='Data binding interpulation';
  subconcept:string='Data binding test';
  subconcept1:string='Data binding';
  rollNo:number=101;
  imgURL:string="../assets/Data-Binding-in-Angular-8.png";
  
  productList:any[]=[
    {
      pid:1001,
      prodName:'Table',
      prc:2500
    },
    {
      pid:1002,
      prodName:'Chair',
      prc:500
    },
    {
      pid:1003,
      prodName:'Sofa',
      prc:10000
    }
  ]
  constructor(private route:Router){

  }
  redirect(){
    this.route.navigateByUrl('')
  }
  }
  

