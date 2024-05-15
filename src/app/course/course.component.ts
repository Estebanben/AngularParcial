import { Component, OnInit } from '@angular/core';
import { Paciente } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  pacientes: Array<Paciente> = [];
  menores: number = 0;
  selected: Boolean = false;
  selectedCourse!:Paciente;

  constructor(private courseService: CourseService) { }

  getPacientesList() {
    this.courseService.getCourses().subscribe(pacientes => {
      this.pacientes = pacientes;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    let totalMenores = 0;
    for (let paciente of this.pacientes) {
      if(paciente.edad<18){
        totalMenores +=1
      }
    }
    this.menores = totalMenores
  }

  onSelected(course: Paciente): void {
    this.selected = true;
    this.selectedCourse = course;
  }

  ngOnInit() {
    this.getPacientesList();
  }

}