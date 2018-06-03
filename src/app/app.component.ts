import { Component } from '@angular/core';
import { DataBaseService } from './services/data-base.service';
import { Http, Headers } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private data: DataBaseService, private http: Http) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('user:password'));
    //http.get('http://localhost:4200/home', {headers: headers}).subscribe();
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

