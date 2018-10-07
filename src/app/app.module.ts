import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { PricingComponent } from "./pages/pricing/pricing.component";

import { ParallaxModule, ParallaxConfig } from "ngx-parallax";
import { ContactComponent } from "./pages/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    PageTitleComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ParallaxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
