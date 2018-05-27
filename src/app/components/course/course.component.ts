import {Component, Input, OnInit} from '@angular/core';
import {Course, Grade} from '../../Models';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  course: Course;

  constructor() { }

  ngOnInit() {
  }

  addGrade() {
    let grade = new Grade();
    grade.value = 3;
    this.course.courseGrades.push(grade);
  }

  avg(){
    if (this.course.courseGrades == null || this.course.courseGrades.length === 0){
      return 0;
    }
    let sum = 0;
    for (let grade of this.course.courseGrades)
    {
      sum += grade.value;
    }
    return (sum / this.course.courseGrades.length);
  }
}
