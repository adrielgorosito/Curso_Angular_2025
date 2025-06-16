import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { ProductImagePipe } from '../../../products/pipes/product-image.pipe';

@Component({
  selector: 'app-product-page',
  imports: [ProductImagePipe],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  private productsService = inject(ProductsService);
  private activatedRoute = inject(ActivatedRoute);

  idSlug = signal(this.activatedRoute.snapshot.paramMap.get('idSlug')!);

  productResource = rxResource({
    params: () => ({ idSlug: this.idSlug() }),
    stream: ({ params }) => {
      return this.productsService.getProductByIdSlug(params.idSlug);
    },
  });
}
