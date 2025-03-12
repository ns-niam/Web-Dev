import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../model/product';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productService = inject(ProductsService);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  

  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.productService.getAllProducts().then((products) => {
      this.products = this.productService.getProducts();
      this.route.params.subscribe(params => {
        const category = params['category'];
        if (category) {
          this.products = this.filterProducts(category);
        } else {
          this.products = [];
        }
      });
    });
  }
  
  filterProducts(category: string) {
    return this.products.filter((product) => product.category === category);
  }

  deleteProductFromList(productId : number) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}

 
