import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseAPIUrl: "https://fakestoreapi.com/" = "https://fakestoreapi.com/"; 
  title:string='ProductService';
  productList:any[]=[
    {
      pid:1001,
      prodName:'table',
      prc:2500,
      discnt:0,
      imgURL:"asd"
    
    },
    {
      pid:1002,
      prodName:'Chair',
      prc:500,
      discnt:0,
      imgURL:"asd"
    },
    {
      pid:1003,
      prodName:'Sofa',
      prc:10000,
      discnt:0,
      imgURL:"asd"
    }
    
  ]
  constructor(private httpObj:HttpClient) {
  
   }

   getproductList():Observable<any>
   {
    let response=this.httpObj.get(this.baseAPIUrl+"products");
    return response;

   }
   getproductById():Observable<any>{
    let response=this.httpObj.get(this.baseAPIUrl+"products/2");
    return response;

   }
  }

