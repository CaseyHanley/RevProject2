import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseyComponent } from './component/casey/casey.component';
import { JoelComponent } from './component/joel/joel.component';
import { SamComponent } from './component/sam/sam.component';
import { RomeComponent } from './component/rome/rome.component';
import { MattComponent } from './component/matt/matt.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  {path : 'casey', component : CaseyComponent},
  {path : 'joel', component : JoelComponent},
  {path : 'sam', component : SamComponent},
  {path : 'rome', component : RomeComponent},
  {path : 'matt', component : MattComponent},
  {path : 'login', component : LoginComponent},
  {path : '', redirectTo:'/', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }