import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { DateandtimeComponent } from './dateandtime/dateandtime.component';
import { NewheaderComponent } from './newheader/newheader.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { RegisterComponent } from './register/register.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditformComponent } from './editform/editform.component';
import { newautherizeGuard } from './newautherize.guard';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'newheader',
    component:NewheaderComponent

  },
  {
    path:'products',
    component:ProductsComponent
  },
{
  path:'dateandtime',
component:DateandtimeComponent,
canActivate:[newautherizeGuard]
},
{
path:'registrationform',
component:RegistrationformComponent
},
{
path:'',
redirectTo:'newheader',
pathMatch:'full'
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'edituser',
  component:EdituserComponent
},
{
path:'editform',
component:EditformComponent
},
{
  path:'newproduct',
  component:NewproductComponent
},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }