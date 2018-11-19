import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions;
  testimonials;

  constructor(private translate: TranslateService) {
    this.translate.get('home.faq.questions').subscribe(key => {
      this.questions = key;
    });

    this.translate.get('home.testimonials').subscribe(key => {
      this.testimonials = key;
    });
  }

  ngOnInit() {}
}
