import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  lang = localStorage.getItem('lang').toUpperCase();
  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.lang = lang.toUpperCase();
    localStorage.setItem('lang', lang);
  }
}
