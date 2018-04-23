import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  capitalize(palavra: string) {
    return palavra
      .substring(0, 1)
      .toUpperCase() +
          palavra
      .substring(1).toLowerCase();

  }

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';

    values.forEach(palavra => {
      result += this.capitalize(palavra) + ' ';
     
   });
    
    return result;
  }

}
