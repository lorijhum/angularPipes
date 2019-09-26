import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse2'
})
export class Reverse2Pipe implements PipeTransform {

  transform(value: any ): any {
    return value.split('').reverse().join('');
  }

}
