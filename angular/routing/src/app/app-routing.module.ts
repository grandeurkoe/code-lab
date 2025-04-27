import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewregisterComponent } from './newregister/newregister.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ContactcompanyComponent } from './contactcompany/contactcompany.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent, children: [
    {path: 'contactme', component: ContactmeComponent},
    {path: 'contactcompany', component: ContactcompanyComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'newregister/:id', component: NewregisterComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
