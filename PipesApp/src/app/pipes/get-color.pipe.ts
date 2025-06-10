import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'getColor',
})
export class GetColorPipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
