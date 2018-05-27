import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GradeComponent } from './components/grade/grade.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import {DataBaseService} from './services/data-base.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes} from '@angular/router';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    CourseComponent,
    StudentComponent,
    StudentListComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
