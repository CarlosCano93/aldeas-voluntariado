import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectsComponent } from './component/pages/projects/projects.component';
import { PageTitleComponent } from './component/page-title/page-title.component';
import { PricingComponent } from './component/pages/pricing/pricing.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ContactComponent } from './component/pages/contact/contact.component';

import { ParallaxModule } from 'ngx-parallax';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    PageTitleComponent,
    PricingComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
