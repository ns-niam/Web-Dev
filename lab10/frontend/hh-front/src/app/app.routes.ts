import { Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    {
        path : '', component : MenuComponent
    },
    {
        path : "companies", component : CompaniesComponent
    }, 
    {
        path : "vacancies", component : VacanciesComponent
    },
    {
        path : "companies/:id/vacancies", component : VacanciesComponent
    },
    {
        path : "companies/:id", component : CompanyDetailComponent
    }
];
