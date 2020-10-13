import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CareerComponent } from './components/career/career.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AdminComponent } from './components/admin/admin.component';
import { ServicesProvideComponent } from './components/serviceProvide/serviceProvide.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'career', component: CareerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'service', component: ServicesProvideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
