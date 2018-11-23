import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { PageTitleComponent } from './component/page-title/page-title.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ParallaxModule } from 'ngx-parallax';
import { ChartsModule } from 'ng2-charts';
import { VolunteeringComponent } from './pages/volunteering/volunteering.component';
import { TourismComponent } from './pages/tourism/tourism.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CollaborateComponent } from './pages/collaborate/collaborate.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    AboutComponent,
    VolunteeringComponent,
    TourismComponent,
    CollaborateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
