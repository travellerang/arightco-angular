import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CareerComponent } from './components/career/career.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AdminComponent } from './components/admin/admin.component';
import { ServicesProvideComponent } from './components/serviceProvide/serviceProvide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesProvideComponent,
    OurClientsComponent,
    OurTeamComponent,
    CareerComponent,
    AboutUsComponent,
    FooterComponent,
    ContactUsComponent,
    QuoteComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
