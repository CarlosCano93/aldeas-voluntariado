import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {
  public doughnutChartLabels: string[];
  public doughnutChartData: number[] = [60, 30, 10];

  constructor(private translate: TranslateService) {
    this.translate.get('pricing.doughnutChartLabels').subscribe(key => {
      this.doughnutChartLabels = key;
    });
  }
}
