import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private productsSVC:ProductService){

  }
  registerForm = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.minLength(6)]),
    lname: new FormControl('',[Validators.required,Validators.maxLength(6)]),
    cNum: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('',[Validators.required]),
    pswd: new FormControl('',[Validators.required]),
    uname: new FormControl(),
    upswd: new FormControl(),
    add: new FormControl(),
    city: new FormControl(),
    gender: new FormControl(),



  })
  regUser() {
    console.log('Form is$(thiis.registerForm.valid)')
    console.log(this.registerForm.value)
  }
ngOnInit(): void {
  console.log(this.productsSVC.productList)
  console.log(this.productsSVC.title)
  this.registerForm.setValue(
    {
      fname:'Mekala',
      lname:'Mekala',
    cNum:'8508311388',
    email:'Krish@gamil.com',
    pswd:'123123',
    uname:'Megi',
    upswd:'Megu',
    add: 'Chromepet',
    city:'Chennai',
    gender: 'Female',
    

    }
  )
}

}
