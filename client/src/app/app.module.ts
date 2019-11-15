import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'register',component:RegisterComponent}




    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
