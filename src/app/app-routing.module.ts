import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { PricingComponent } from './component/pages/pricing/pricing.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { AboutComponent } from './component/pages/about/about.component';
import { VolunteeringComponent } from './component/pages/volunteering/volunteering.component';
import { TourismComponent } from './component/pages/tourism/tourism.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'volunteering', component: VolunteeringComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
