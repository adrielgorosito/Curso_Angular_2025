import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../interfaces/product.interface';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

const API_URL = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);

  getProducts(options: Options): Observable<ProductsResponse> {
    const limit = options.limit ? options.limit : 9;
    const offset = options.offset ? options.offset : 0;
    const gender = options.gender ? options.gender : '';

    return this.http.get<ProductsResponse>(`${API_URL}/products`, {
      params: {
        limit: limit,
        offset: offset,
        gender: gender,
      },
    });
  }

  getProductByIdSlug(idSlug: string): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${idSlug}`);
  }
}
