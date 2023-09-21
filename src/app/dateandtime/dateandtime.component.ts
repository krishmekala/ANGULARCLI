import { Component } from '@angular/core';

@Component({
  selector: 'app-dateandtime',
  templateUrl: './dateandtime.component.html',
  styleUrls: ['./dateandtime.component.css']
})
export class DateandtimeComponent {
  todaysDate:Date=new Date();
  prods:string[]=['Table','Chair','Sofa']

}
