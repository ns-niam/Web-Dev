import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete() {
    this.deleteProduct.emit(this.product.id);
  }
}
