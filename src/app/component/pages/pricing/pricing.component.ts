import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {
  public doughnutChartLabels: string[] = [
    'Alojamiento y comidas',
    'Desarrollo de la aldea',
    'Gestión y comisión'
  ];
  public doughnutChartData: number[] = [60, 30, 10];

  data = [
    {
      title: '1 semana',
      price: '500',
      features: [
        { feature: 'Alojamiento' },
        { feature: 'Comidas incluídas' },
        { feature: 'Excursiones planificadas' }
      ],
      isFeaturePlan: false
    },
    {
      title: '2 semanas',
      price: '900',
      features: [
        { feature: 'Alojamiento' },
        { feature: 'Comidas incluídas' },
        { feature: 'Excursiones planificadas' }
      ],
      isFeaturePlan: false
    },
    {
      title: '3 semanas',
      price: '1200',
      features: [
        { feature: 'Alojamiento' },
        { feature: 'Comidas incluídas' },
        { feature: 'Excursiones planificadas' }
      ],
      isFeaturePlan: true
    },
    {
      title: '4 semana',
      price: '1500',
      features: [
        { feature: 'Alojamiento' },
        { feature: 'Comidas incluídas' },
        { feature: 'Excursiones planificadas' }
      ],
      isFeaturePlan: false
    }
  ];

  public chartHovered(e: any): void {
    console.log(e);
  }
}
