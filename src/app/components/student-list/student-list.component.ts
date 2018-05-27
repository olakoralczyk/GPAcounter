import { Component, OnInit } from '@angular/core';
import {Course, Grade, Student} from '../../Models';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [DataBaseService]
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(private data: DataBaseService) { }

  ngOnInit()    {
    this.data.getStudents()
      .subscribe(data => {
        console.log(data);
        this.students = data;
      });
  }
  add() {
    const student = new Student();
    const course = new Course();
    const grade = new Grade();
    grade.value = 2;
    course.courseGrades = [grade];
    student.studentCourses = [course];
   this.data.addStudent( student )
     .subscribe( data =>
       this.students.push(data)
     );
  }

  save() {
    for (let i = 0; i < this.students.length; i++) {
      this.data.updateStudent(this.students[i]).subscribe(data => console.log("Updated " + i));
      console.log(this.students[i]);    }
  }




}
