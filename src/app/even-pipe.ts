import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ 
    name: 'even' ,
    pure: true
})
export class Evenpipe implements PipeTransform {
  transform(nums: number[]) {
    return nums.filter(num => num%2==0);
  }
}
