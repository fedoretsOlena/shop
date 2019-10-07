import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shOrderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: {}[], fieldName: string, DESC = true): {}[] {

    if (!Array.isArray(value) || !value.some(item => item.hasOwnProperty(fieldName))) {
      return value;
    }

    return value.sort((a, b) => {
      if (DESC) {
        return a[fieldName] < b[fieldName] ? 1 : -1;
      }

      return a[fieldName] < b[fieldName] ? -1 : 1;
    });
  }
}
