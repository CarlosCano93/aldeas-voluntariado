import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {
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
}
