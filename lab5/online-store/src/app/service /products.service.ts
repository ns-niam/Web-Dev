import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly url = 'http://localhost:3000/products';

  products: Product[] = [];

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    this.products = await data.json();
    return this.products
  }

  async getProductById(id: number): Promise<Product[] | undefined> {
    const data = await fetch(`${this.url}/?id=${id}`);
    return (await data.json()) ?? {};
  }

  async putProductLikes(id: number, likes: number): Promise<void> {  
    const u = this.url + `/${id}`;
    const data = {
      likes: likes
    };
  
    await fetch(u, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('send')
  }

  getProducts() {
    return this.products;
  }

  
}
