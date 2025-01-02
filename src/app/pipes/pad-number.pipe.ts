import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'padNumber'
})
export class PadNumberPipe implements PipeTransform {
  transform(value: number, digits: number = 2): number[] {
    let str = value.toString().padStart(digits, '0');
    return Array.from(str, char => char).map(it => parseInt(it));
  }
}
