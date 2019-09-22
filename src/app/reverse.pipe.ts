import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
  
})
export class ReversePipe implements PipeTransform {
newString: string;

  transform(value: any, reverseMe: string,): any {
     this.newString = '';   
     var i: number;

     if(value.length === 0 || reverseMe === '') {
       return value;
     }
                  
     i = value.length - 1;
               

     for(var counter:number = i; counter>=0; counter--){
         this.newString = this.newString + value.charAt(counter);
      
    } 
        
    return this.newString;
  }

}
