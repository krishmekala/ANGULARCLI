import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patchvalueform',
  templateUrl: './patchvalueform.component.html',
  styleUrls: ['./patchvalueform.component.css']
})
export class PatchvalueformComponent implements OnInit{
  imgURL:string="assets/images.jpg";
registerForm=new FormGroup({
  fname: new FormControl('',[Validators.required,Validators.maxLength(11)]),
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
  ngOnInit(): void {
    this.registerForm.patchValue({
      fname:'Manimekalai',
         lname:'Megu'
    })
  }

}
