import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {Routes} from '@angular/router/src/config';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/Auth.service';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'appareils', component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: AppareilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent, AppareilViewComponent, AppareilComponent,ContactComponent],

})
export class AppModule {




}
