import { Component } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent {

  title;
  subtitle;
  data: Project[];

  constructor(private translate: TranslateService) {
    this.translate.get('tourism.title').subscribe(key => {
      this.title = key;
    });

    this.translate.get('tourism.subtitle').subscribe(key => {
      this.subtitle = key;
    });

    this.translate.get('tourism.projects').subscribe(key => {
      this.data = key;
    });
  }
}
