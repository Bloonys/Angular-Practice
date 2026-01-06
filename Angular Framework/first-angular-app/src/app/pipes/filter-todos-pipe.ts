import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos',
  standalone: false
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
