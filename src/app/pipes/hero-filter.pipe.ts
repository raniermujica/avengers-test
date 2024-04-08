import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'heroFilter' })
export class HeroFilterPipe implements PipeTransform {
  transform(items: any[], searchQuery: string): any[] {
    if (!items) return [];
    if (!searchQuery) return items;

    searchQuery = searchQuery.toLowerCase().replace(/\./g, '');

    return items.filter((item: any) => {
      return item.name.toLowerCase().replace(/\./g, '').includes(searchQuery);
    });
  }
}
