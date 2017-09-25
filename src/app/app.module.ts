import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { LocationStrategy, HashLocationStrategy, Location} from "@angular/common";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from "@angular/forms";

import UsersService from './_services/http/users.service';
import {HttpModule} from "@angular/http";
import { AuthComponent } from './auth/auth.component';
import AuthenticationService from "./_services/auth.service";

const appRoutes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgSemanticModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost'
    },
    {
      provide: UsersService,
      useClass: UsersService
    },
    {
      provide: AuthenticationService,
      useClass: AuthenticationService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }



