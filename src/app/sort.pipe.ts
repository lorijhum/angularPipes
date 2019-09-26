import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
  })
export class SortPipe implements PipeTransform {

  transform(value: any, item: any[]): any {
    const resultArray = item.slice();
   // const resultArray = item.sort(this.compare);
    return resultArray.sort(this.compare);
  }

  compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  
  
}
