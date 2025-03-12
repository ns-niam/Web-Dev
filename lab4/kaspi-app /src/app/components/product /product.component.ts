import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;

  getWhatsAppLink(url: string): string {
    return `https://wa.me/?text=${encodeURIComponent(
      'Смотри, какой товар на Kaspi: ' + url
    )}`;
  }

  getTelegramLink(url: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent('Смотри, какой товар на Kaspi!')}`;
  }
}
