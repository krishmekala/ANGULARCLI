import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../model/product';

@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css']
})
export class NewheaderComponent {
 concept:string='DATA BINDING';
  subconcept:string='Interpulation-->{{Binding}}';
  subconcept1:string='Property Binding-->[--Binding--]';
  subconcept3:string='hai';
  rollNo:number=101;
  imgURL:string="assets/Data-Binding-in-Angular-8.png";
  imgurl:string="assets/Onewaydatabinding.png";
  ImgUrL:string="assets/Two_Way_Data_Binding.webp";
  url:string="assets/coding.png";
  IsValidUser:boolean=false;
  name:string="Mekala";
 
  age:number=27;
/*Click: any;
   public displayName(name:string)
   {
    
    this.name=name;
    this.age=27;

   }*/
   public ImageUrl(){
    ImageUrl:"../assets/hp3.jpg";
  }
    
    
  productList:product[]=[
    {
      pid:1001,
      prodName:'Table',
      prc:2500,
      discount:10,
      Availability:1210,
      color:'red',
      imgURL:'asda'
    },
    {
      pid:1002,
      prodName:'Chair',
      prc:500,
      discount:10,
      Availability:1210,
      color:'yellow',
    imgURL:'asda'
    },
    {
      pid:1003,
      prodName:'Sofa',
      prc:10000,
      discount:10,
      Availability:1210,
      color:'pink',
    imgURL:'asda'
    }
  ]
  
  
  }
  

