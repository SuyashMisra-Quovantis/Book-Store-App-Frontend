import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'logout',
        component: LoginComponent,
      },
    ]),
  ],
  providers: [AppServiceService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
