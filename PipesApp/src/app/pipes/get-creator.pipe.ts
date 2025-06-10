import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'getCreator',
})
export class GetCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    return Creator[value];
  }
}
