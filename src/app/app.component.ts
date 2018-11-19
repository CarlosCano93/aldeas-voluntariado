import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {
    var lang;

    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
      translate.use(lang.match(/es|en/) ? lang : 'en');
    } else {
      const browserLang = translate.getBrowserLang();
      lang = browserLang.match(/es|en/) ? browserLang : 'en';
      localStorage.setItem('lang', lang);
    }

    translate.use(lang);
  }

  ngOnInit() {
    this,
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => window.scrollTo(0, 0));
  }
}
