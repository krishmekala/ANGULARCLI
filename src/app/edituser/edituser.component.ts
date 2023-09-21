import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  UserName:string |null='';
userList:any[]=[
  {
  FirstName:'Mekala',
  LastName:'Megi',
  Email:'Krish@gamil.com',
  Password:'123123'
},
{
  FirstName:'Rithick',
  LastName:'Rithu',
  Email:'Rithu@gamil.com',
  Password:'1231234'
},
{
  FirstName:'Thiyagu',
  LastName:'Thi',
  Email:'Thi@gamil.com',
  Password:'121'
}
]
ngOnInit(): void {
this.UserName=localStorage.getItem('UserName');
console.log(this.UserName)  
}
}
