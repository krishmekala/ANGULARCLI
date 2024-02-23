import { Component } from '@angular/core';
import { TopProducts } from '../model/product';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.css']
})
export class TopDealsComponent {
  TopDeals:TopProducts[]=[
    {
      pid:1001,
      prodName:'HpLaptop',
      prc:55000,
      discount:10,
      Availability:12,
      color:'LightGray',
      pImg:"assets/hp3.jpg"
    },
    {
      pid:1002,
      prodName:'Chair',
      prc:500,
      discount:10,
      Availability:1210,
      color:'yellow',
      pImg:"assets/hp4.jpg"
    },
    {
      pid:1003,
      prodName:'Sofa',
      prc:10000,
      discount:10,
      Availability:1210,
      color:'pink',
      pImg:"assets/hp5.jpg"
    }
  ]
constructor(private rout:Router){

}
redirect(){
  this.rout.navigateByUrl('/TopDeals')
}
}