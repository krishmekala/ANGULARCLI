import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { product } from '../model/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productList: product[] = [];
  constructor(private productsSVC:ProductService){

  }
  ngOnInit(): void {
    console.log(this.productsSVC.productList);
    this.productList=this.productsSVC.productList
  }

}
