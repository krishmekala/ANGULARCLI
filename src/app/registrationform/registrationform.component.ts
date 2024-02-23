import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  ImgURL:string="assets/images.png";
  constructor(private product :ProductService){

}

  ngOnInit(): void {
console.log(this.product.productList)
    throw new Error('Method not implemented.');
  }
  subEnq(registrationform: any) {
    console.log(registrationform.value)
  }
}
