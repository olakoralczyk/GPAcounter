import { Component } from '@angular/core';
import {DataBaseService} from './services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private data:DataBaseService){
  }
  test()  {
    console.log('cokol');
    this.getStudents();
    console.log('cokol2');

  }
  getStudents(): void {
    this.data.getStudents()
      .subscribe(data => console.log(data));
  }


}

