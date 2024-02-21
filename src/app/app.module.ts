import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { DateandtimeComponent } from './dateandtime/dateandtime.component';
import { NewheaderComponent } from './newheader/newheader.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { EditformComponent } from './editform/editform.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { HttpserviceInterceptor } from './httpservice.interceptor';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { PatchvalueformComponent } from './patchvalueform/patchvalueform.component';
import { CalculatorComponent } from './calculator/calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    DateandtimeComponent,
    NewheaderComponent,
    RegistrationformComponent,
    RegisterComponent,
    EditformComponent,
    EdituserComponent,
    NewproductComponent,
    TopDealsComponent,
    PatchvalueformComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpserviceInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
