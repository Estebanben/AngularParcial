import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CourseComponent,CourseDetailComponent],
  exports: [CourseComponent,CourseDetailComponent]
})
export class CourseModule { }
