import { Component, inject } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../models/company';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  imports: [RouterLink],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent {
  companyService = inject(CompaniesService);
  company : Company | null = null;
  route = inject(ActivatedRoute)

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompanyById(id).subscribe((company) => {
      this.company = company;
    })
  }
}
