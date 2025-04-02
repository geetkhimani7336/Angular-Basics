import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInrConvert'
})
export class UsdToInrConvertPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [x] = args;
    return value * x;
  }

}
