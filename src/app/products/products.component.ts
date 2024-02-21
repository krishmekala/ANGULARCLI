import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:product[]=[]
  ngOnInit(): void {

    this.productList=this.productsSVC.productList
    console.log(this.productList);
    
  }
  
constructor(private rout:Router,private productsSVC:ProductService){
  
} 

}
