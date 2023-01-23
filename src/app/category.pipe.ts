import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './model/employee';

@Pipe({
  name: 'category',
  pure:false
})
export class CategoryPipe implements PipeTransform {

  transform(employees:Employee[],category?:any): any {
    if(category == 'all')
    {
      console.log(employees)
      return employees;
    }
    else
    {
      return employees.filter((employee)=>employee.category==category)
    }
  }

}
