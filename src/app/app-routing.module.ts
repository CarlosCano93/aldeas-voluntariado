import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ProjectsComponent } from './component/pages/projects/projects.component';
import { PricingComponent } from './component/pages/pricing/pricing.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { AboutComponent } from './component/pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
