import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], category: string): any[] {
    if (!items) return [];
    if (!category || category.trim() === '') return items;

    return items.filter((item) => item.category === category);
  }
}
