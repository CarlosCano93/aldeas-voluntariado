import { Component } from '@angular/core';
import { Volunteer } from 'src/app/model/volunteer.model';
import { ContactService } from '../../service/volunteer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  volunteer = new Volunteer();

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService
  ) {}

  sendContact() {
    console.log(this.volunteer);

    /*
    this.contactService.addVolunteer(this.volunteer).subscribe(v => {
      this.toastr.success('Gracias por contactar con nosotros!');
    });

    this.volunteer = new Volunteer();
    */

    this.toastr.info(
      'Oh vaya! No hemos podido recibir tus datos! Intentalo más tarde!'
    );
  }
}
