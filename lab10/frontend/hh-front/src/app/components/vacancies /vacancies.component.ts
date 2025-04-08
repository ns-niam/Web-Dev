import { Component, inject } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { Vacancy } from '../../models/vacancy';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  imports: [RouterLink],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent {
  vacancyService = inject(VacanciesService);
  vacancies : Vacancy[] = [];
  route = inject(ActivatedRoute)

  ngOnInit() {
    const urlSegments = this.route.snapshot.url;

    const companySegment = urlSegments.find(segment => segment.path === 'companies');
    const idSegment = this.route.snapshot.paramMap.get('id');

    if (companySegment && idSegment) {
      this.vacancyService.getVacanciesByCompany(+idSegment).subscribe((vacancies) => {
        console.log("dsad")
        this.vacancies = vacancies;
      })
    } else {
      this.vacancyService.getAllVacancies().subscribe((vacancies) => {
        console.log("dsad")
        this.vacancies = vacancies;
    })
  }
}
}
