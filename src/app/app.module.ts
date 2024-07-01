import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlComponent } from './components/owl/owl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorsComponent } from './shared/errors/errors.component'; 
import { AuthenticateModule } from './featured/authenticate/authenticate.module';
import { NothingComponent } from './components/nothing/nothing.component';
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    UpdatesComponent,
    ContactUsComponent,
    OwlComponent,
    ErrorsComponent,
    NothingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthenticateModule,
    // NgOtpInputModule,
  ],
  providers: [
  {
    provide:HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi:true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
