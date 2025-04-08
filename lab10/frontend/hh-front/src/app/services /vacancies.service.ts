import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  readonly apiUrl = "http://127.0.0.1:8000/api/"
  private http = inject(HttpClient);

  getAllVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies`)
  }

  getVacanciesByCompany(id : number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${id}/vacancies`)
  }

  getVacancieById(id : number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}/${id}`)
  }

  getVacanciesTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies/top_ten`)
  }
}
