import { Component, effect, inject, signal } from '@angular/core';
import { ProductCard } from '../../../products/components/product-card/product-card';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '../../../products/interfaces/product.interface';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private productsService = inject(ProductsService);

  productsResource = rxResource({
    params: () => ({}),
    stream: (params) => {
      return this.productsService.getProducts({});
    },
  });
}
