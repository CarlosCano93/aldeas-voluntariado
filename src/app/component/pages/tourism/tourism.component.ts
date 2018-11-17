import { Component } from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent {
  title = 'Turismo & idiomas';
  subtitle =
    'Infórmate de los diferentes centros y todas las oportunidades que ofrece';
  data: Project[] = [
    {
      title: 'Escuela de Español en Valparaíso',
      description: [
        'Realiza una inmersión en una residencia en Chile mientras estudias, viajas, comes y disfrutas de la vida de Valparaíso con nuestro programa de inmersión lingüística.',
        'Compartirás la experiencia con los trabajadores de un café restaurante, con un profesor privado de Español y un guía turístico que te enseñara los mejores rincones de la ciudad y el increíble entorno que lo rodea.'
      ],
      country: 'Chile',
      city: 'Valparaíso',
      tags: 'turismo aventura idomas español',
      image1: '../../../assets/images/uyuni.jpg',
      image2: '../../../assets/images/market.jpg',
      image3: '../../../assets/images/titicaca.jpg'
    }
  ];
}
