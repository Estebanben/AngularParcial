import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseDetail!:Paciente

  constructor() { }

  ngOnInit() {
  }

}
