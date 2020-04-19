  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseyComponent } from './component/casey/casey.component';
import { JoelComponent } from './component/joel/joel.component';
import { RomeComponent } from './component/homepage (rome)/rome.component';
import { SamComponent } from './component/sam/sam.component';
import { MattComponent } from './component/matt/matt.component';

import{ HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { AddressService } from './service/address.service';
import { AuthenticateUserService } from './service/authenticate-user.service';
import { LogoutComponent } from './component/logout/logout.component';
import { TopnavComponent } from './component/topnav/topnav.component';
import { BottomnavComponent } from './component/bottomnav/bottomnav.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { StaffpageComponent } from './component/staffpage/staffpage.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { LoginService } from './service/login.service';
import { OrderService } from './service/order.service';
import { DriverComponent } from './component/driver/driver.component';
import { EditMenuComponent } from './component/edit-menu/edit-menu.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { VerticaltitleComponent } from './component/verticaltitle/verticaltitle.component';
import { PaymentComponent } from './component/payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    CaseyComponent,
    JoelComponent,
    RomeComponent,
    SamComponent,
    MattComponent,
    LoginComponent,
    LogoutComponent,
    TopnavComponent,
    BottomnavComponent,
    NewUserComponent,
    StaffpageComponent,
    ContactusComponent,
    DriverComponent,
    EditMenuComponent,
    MyaccountComponent,
    VerticaltitleComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    NgbModule,
    BrowserAnimationsModule


 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AddressService, AuthenticateUserService, LoginService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
