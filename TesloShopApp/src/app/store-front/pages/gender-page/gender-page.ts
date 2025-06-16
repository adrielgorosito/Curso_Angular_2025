import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from '../../../products/components/product-card/product-card';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css',
})
export class GenderPage {
  private productsService = inject(ProductsService);
  private activatedRoute = inject(ActivatedRoute);

  gender = toSignal(
    this.activatedRoute.params.pipe(
      map(({ gender }) => {
        return gender;
      })
    )
  );

  productsResource = rxResource({
    params: () => ({ gender: this.gender() }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        gender: params.gender,
      });
    },
  });
}
