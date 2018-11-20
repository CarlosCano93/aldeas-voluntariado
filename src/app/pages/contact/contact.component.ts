import { Component } from '@angular/core';
import { Volunteer } from 'src/app/model/volunteer.model';
import { ContactService } from '../../service/volunteer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  volunteer = new Volunteer();

  constructor(private contactService: ContactService) {}

  sendContact() {
    console.log(this.volunteer);

    this.contactService.addVolunteer(this.volunteer).subscribe(v => {
      console.log('volunteer saved');
    });
  }
}
