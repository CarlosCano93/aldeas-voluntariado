import { Component } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent {

  title;
  subtitle;
  data: Project[];

  constructor(private translate: TranslateService) {
    this.translate.get('volunteering.title').subscribe(key => {
      this.title = key;
    });

    this.translate.get('volunteering.subtitle').subscribe(key => {
      this.subtitle = key;
    });

    this.translate.get('volunteering.projects').subscribe(key => {
      this.data = key;
    });
  }
}
