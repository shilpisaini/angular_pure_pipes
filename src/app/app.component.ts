import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pure-pipes';

  nums =[1, 2, 3, 4];
 
  addNumber(number: number) {    
   // this.nums.push(number); //If we uncomment this line then pure pipe won't detect the change
    this.nums = this.nums.concat(number);  /*This line is uncommented when we want the pure pipe
                                             to detect the change as we are changing the Reference.*/
  }

}
