import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort2',
  pure: false
})
export class Sort2Pipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a,b) => {
      if(a[propName] > b[propName]) {
        return 1;
      }else {
        return -1;
      }
    });
  }

}
