import { Component, inject } from '@angular/core';
import { Company } from '../../models/company';
import { CompaniesService } from '../../services/companies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-companies',
  imports: [RouterLink],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
    companyService = inject(CompaniesService);
    companies : Company[] = [];

    ngOnInit() {
      this.companyService.getAllCompanies().subscribe((companies) => {
        console.log("dsad")
        this.companies = companies;
      })
    }
}
