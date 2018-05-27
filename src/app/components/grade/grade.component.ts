import {Component, Input, OnInit} from '@angular/core';
import {Grade} from '../../Models';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  @Input()
  grade: Grade;

  constructor() { }

  ngOnInit() {
  }

}
