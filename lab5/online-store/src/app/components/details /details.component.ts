import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { ProductsService } from '../../service/products.service';


@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  productsService = inject(ProductsService);
  route: ActivatedRoute = inject(ActivatedRoute);

  productInfo: Product | undefined;
  private likeTimeout: any; 

  constructor() {
    const productID = Number(this.route.snapshot.params['id']);

    this.productsService.getProductById(productID).then((productInfo) => {
      this.productInfo = productInfo ? productInfo[0] : undefined;
    });
  }
  
  addLike() {
    if (!this.productInfo) return;

    this.productInfo.likes += 1; 
    clearTimeout(this.likeTimeout); 

    this.likeTimeout = setTimeout(() => {
      this.productsService.putProductLikes(this.productInfo!.id, this.productInfo!.likes);
    }, 300); 
  }
}
