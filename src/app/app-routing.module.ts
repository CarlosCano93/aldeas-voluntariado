import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { PricingComponent } from "./pages/pricing/pricing.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "pricing", component: PricingComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
