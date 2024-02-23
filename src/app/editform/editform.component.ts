import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  ImgURL:string="assets/images.jpg";
  registerForm = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.minLength(6)]),
    lname: new FormControl('',[Validators.required,Validators.maxLength(6)]),
    cNum: new FormControl(),
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
    gender: 'Female'

    }
  )
}

}
