import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  data = [
    {
      title: 'Orfanato en Bolivia',
      description1:
        'Aldea en el corazón de la ciudad de Santa Cruz de la Sierra, Bolivia. Creada en 1972 por un sacerdote, que todavía vive en la aldea, que emigro a Bolivia desde Austria. La misión con la que fue creada esta aldea y que continua funcionando es la de criar a niños abandonados, maltratados y huérfanos en un ambiente familiar de amor con una “madre” y sus hermanos. Ha crecido hasta contar con un total de X casas unifamiliares. Cada casa tiene una “mama” y 10-12 niños a los que se les proporciona todos los beneficios emocionales y sociales de crecer en un ambiente familiar amoroso.',
      description2:
        'También cuenta con una guardería en la cual hay espacio para 80 bebes y niños (desde bebé hasta 6 años).',
      description3:
        'La aldea cuenta con su propio colegio, unidad odontológica, enfermería, taller, polideportivo, etc...',
      localization: 'Santa Cruz de la Sierra',
      other: 'More info',
      image1: '../../../assets/images/uyuni.jpg',
      image2: '../../../assets/images/market.jpg',
      image3: '../../../assets/images/titicaca.jpg'
    },
    {
      title:
        'Centro de formación y Capacitación para jóvenes con pocos recursos ',
      description1:
        'Centro de Formación y Capacitación proyectado con la finalidad de ofrecer formación y capacitación técnica como así también para retiros espirituales en primer lugar para los niños y jóvenes, para el personal (mamás de casa, tías, y otros) como ayuda adicional para lograr mejores resultados a favor de los niños y jóvenes.',
      localization: 'Santa Cruz de la Sierra',
      other: 'More info',
      image1: '../../../assets/images/uyuni.jpg',
      image2: '../../../assets/images/market.jpg',
      image3: '../../../assets/images/titicaca.jpg'
    },
    {
      title: 'Centro de Madres Solteras “Madre María”',
      description1:
        'Proyecto contra el abandono de niños con capacidad para 50 madres solteras. Esta obra tiene la finalidad de ayudar a madres solteras en momentos de problemas y necesidades, ayudarlas como madres y darles una tecnificación personal para que puedan educarse de forma autónoma en la vida futura y críen a sus hijos con amor y evitar de esta manera de que hayan más niños huérfanos y abandonados',
      localization: 'Santa Cruz de la Sierra',
      other: 'More info',
      image1: '../../../assets/images/uyuni.jpg',
      image2: '../../../assets/images/market.jpg',
      image3: '../../../assets/images/titicaca.jpg'
    }
  ];
}
