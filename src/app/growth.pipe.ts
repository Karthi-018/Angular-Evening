import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'growth'
})
export class GrowthPipe implements PipeTransform {

  transform(value: any, pwr?:any): unknown {
    
    if(pwr == '')
    {
      return value
    }
    else
    {
      return value**pwr
    }
    
  }

}
