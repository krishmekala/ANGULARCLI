import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  productList:any[]=[]
    
  ngOnInit(): void {
    //data restrived from Service property
    console.log(this.productsSVC.productList)
    console.log(this.productsSVC.title)
    this.productList=this.productsSVC.productList; 
    //data will be restrived from the Backed API 
    this.productsSVC.getproductList().subscribe(
      (response)=>{
        console.log(response)
      },
      (error)=>
      {
        console.log(error)
      },
      ()=>{
        console.log('completed block ')
      }
      )
    
  }
  
constructor(private productsSVC:ProductService){
  
}
}

