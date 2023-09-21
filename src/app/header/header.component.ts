import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  products: string[] = ['Table', 'Chair', 'Sofa']
  menuList: any[] = [
    {
      menuItem: 'Header',
      menuURL: 'header'
    },
    {
      menuItem: 'NewHeader',
      menuURL: 'newheader'
    },
    {
      menuItem: 'Products',
      menuURL: 'products'
    },
    {
      menuItem: 'Date&Time',
      menuURL: 'dateandtime'
    },
    {
      menuItem:'RegistrationForm',
      menuURL:'registrationform'
    },
    {
      menuItem:'Register',
      menuURL:'register'
    },
    {
      menuItem:'EditUser',
      menuURL:'edituser'
    },
    {
      menuItem:'NewProduct',
      menuURL:'newproduct'
    },
    {
      menuItem:'AdminUser',
      menuURL:'admin/add-User'
    }


  ]

    
  }
