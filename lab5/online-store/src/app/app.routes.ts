import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    
    path: 'category/:category',
    component: ProductListComponent,
  },
  {
    path: 'category/:category/:id',
    component: DetailsComponent
  }
];
