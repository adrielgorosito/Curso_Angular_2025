import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): any {
    if (typeof value == 'string') return `${API_URL}/files/product/${value}`;
    if (value[0]) return `${API_URL}/files/product/${value[0]}`;
    return '.assets/images/no-image.jpg';
  }
}
