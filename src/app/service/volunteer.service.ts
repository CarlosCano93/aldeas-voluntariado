import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../model/volunteer.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })
export class ContactService {
  volunteerUrl = 'http://localhost:8080/clients/add';

  constructor(private http: HttpClient) {}

  addVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.post<Volunteer>(this.volunteerUrl, volunteer, httpOptions);
  }
}
