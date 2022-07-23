import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {
  transform(value: number | null, ...args: any[]): string {
    if (!value) {
      return '-';
    }

    if (value < 1000) {
      return `${value} g`;
    } else if (value >= 1000) {
      return `${value / 1000} kg`;
    } else {
      return '-';
    }
  }
}
