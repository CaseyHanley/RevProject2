import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseyComponent } from './component/casey/casey.component';
import { JoelComponent } from './component/joel/joel.component';
import { SamComponent } from './component/sam/sam.component';
import { MattComponent } from './component/matt/matt.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NewUserComponent } from './component/new-user/new-user.component';
import { StaffpageComponent } from './component/staffpage/staffpage.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { RomeComponent } from './component/homepage (rome)/rome.component';
import { DriverComponent } from './component/driver/driver.component';
import { EditMenuComponent } from './component/edit-menu/edit-menu.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { PaymentComponent } from './component/payment/payment.component';



const routes: Routes = [
  {path : 'menu', component : CaseyComponent},
  {path : 'neworder', component : JoelComponent},
  {path : 'viewcart', component : SamComponent},
  {path : 'homepage', component : RomeComponent},
  {path : 'payment', component : MattComponent},
  {path : 'makepayment', component : PaymentComponent},
  {path : 'staff', component : StaffpageComponent},
  {path : 'login', component : LoginComponent},
  {path : 'logout', component : LogoutComponent},
  {path : 'contactus', component : ContactusComponent},
  {path : 'registeruser', component : NewUserComponent},
  {path : 'driver', component : DriverComponent},
  {path : 'additem', component : EditMenuComponent},
  {path : 'account', component : MyaccountComponent},
  {path : 'viewcart/payment', redirectTo : '/payment', pathMatch : 'full'},
  {path : 'login/registeruser', redirectTo : '/registeruser', pathMatch : 'full'},
  {path : 'payment/makepayment', redirectTo : '/makepayment', pathMatch : 'full'},
  {path : '', redirectTo : '/homepage', pathMatch : 'full'}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }