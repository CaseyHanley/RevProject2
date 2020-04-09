  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseyComponent } from './component/casey/casey.component';
import { JoelComponent } from './component/joel/joel.component';
import { RomeComponent } from './component/rome/rome.component';
import { SamComponent } from './component/sam/sam.component';
import { MattComponent } from './component/matt/matt.component';
import { LoginService } from './service/login.service';
import{ HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseyComponent,
    JoelComponent,
    RomeComponent,
    SamComponent,
    MattComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
