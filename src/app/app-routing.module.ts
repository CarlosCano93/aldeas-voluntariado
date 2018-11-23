import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { VolunteeringComponent } from './pages/volunteering/volunteering.component';
import { TourismComponent } from './pages/tourism/tourism.component';
import { CollaborateComponent } from './pages/collaborate/collaborate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'volunteering', component: VolunteeringComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'collaborate', component: CollaborateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
