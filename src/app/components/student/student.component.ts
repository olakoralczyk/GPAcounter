import {Component, Input, OnInit} from '@angular/core';
import {Course, Grade, Student} from '../../Models';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()
  student: Student;
    constructor() { }

  ngOnInit() {
  }

  addCourse() {
    const course = new Course();
    const grade = new Grade();
    grade.value = 1;
    course.courseGrades = [grade];
    this.student.studentCourses.push(course);
  }

}
