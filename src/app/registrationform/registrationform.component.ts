import { Component } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  subEnq(registrationform: any) {
    console.log(registrationform.value)
  }
}
