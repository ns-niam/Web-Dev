import { Component, OnInit, signal } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-main',
  imports: [ProductComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products.set(this.productService.getProducts());
  }
}
