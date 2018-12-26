import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/model/volunteer.model';
import { ContactService } from '../../service/volunteer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  volunteer = new Volunteer();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  sendContact() {
    console.log(this.volunteer);

    this.contactService.addVolunteer(this.volunteer).subscribe(v => {
      console.log('volunteer saved');
    });
  }
}
