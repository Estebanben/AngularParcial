import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Paciente } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.baseUrl+ 'pacients.json';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

}
