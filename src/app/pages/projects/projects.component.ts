import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent {
  data = [
    {
      title: "Aldea Santa Cruz de la Sierra",
      description1:
        "1 residencia de mujeres y otra de hombres jóvenes previo a su paso de preparación para una vida independiente. 110 niños.",
      description2: "11 casas de familia con albergue entre 10-12 niños.",
      description3:
        "1 guardería en la cual hay espacio para 80 bebes y niños (desde bebé hasta 6 años).",
      description4: "1 colegio.",
      localization: "Santa Cruz de la Sierra",
      other: "More info",
      image1: "../../../assets/images/uyuni.jpg",
      image2: "../../../assets/images/market.jpg",
      image3: "../../../assets/images/titicaca.jpg"
    },
    {
      title: "Aldea de San Jose de Chiquitos",
      description1:
        "21 casas de familia con albergue entre 10-12 niños más una madre. 210 niños.",
      description2:
        "terreno de agropecuaria para auto suministración y tecnificación de los jóvenes de la Aldea y una granja de verduras",
      description3: "residencia de varones para 30 jóvenes",
      localization: "Santa Cruz de la Sierra",
      other: "More info",
      image1: "../../../assets/images/uyuni.jpg",
      image2: "../../../assets/images/market.jpg",
      image3: "../../../assets/images/titicaca.jpg"
    },
    {
      title: "Centro de Formación y Capacitación",
      description1:
        "Centro de Formación y Capacitación proyectado con la finalidad de ofrecer formación y capacitación técnica como así también para retiros espirituales en primer lugar para los niños y jóvenes, para el personal (mamás de casa, tías, y otros) como ayuda adicional para lograr mejores resultados a favor de los niños y jóvenes.",
      localization: "Santa Cruz de la Sierra",
      other: "More info",
      image1: "../../../assets/images/uyuni.jpg",
      image2: "../../../assets/images/market.jpg",
      image3: "../../../assets/images/titicaca.jpg"
    },
    {
      title: "Centro de Madres Solteras “Madre María”",
      description1:
        "Proyecto contra el abandono de niños con capacidad para 50 madres solteras. Esta obra tiene la finalidad de ayudar a madres solteras en momentos de problemas y necesidades, ayudarlas como madres y darles una tecnificación personal para que puedan educarse en forma autónoma en la vida futura y críen a sus hijos con amor y evitar de esta manera de que hayan más niños huérfanos y abandonados.",
      localization: "Santa Cruz de la Sierra",
      other: "More info",
      image1: "../../../assets/images/uyuni.jpg",
      image2: "../../../assets/images/market.jpg",
      image3: "../../../assets/images/titicaca.jpg"
    }
  ];
}
