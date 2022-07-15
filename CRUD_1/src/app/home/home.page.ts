import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Nombre : any;
  Apellido : any;
  Matricula: any;
  Carrera : any;
  students: any;

  constructor(
    public _ApiService: ApiService
  ) 
  {
    this.getStudent();
  }

  addStudent(){
    let data = {
      Nombre : this.Nombre,
      Apellido : this.Apellido,
      Matricula : this.Matricula,
      Carrera : this.Carrera,
    }
    this._ApiService.addStudent(data).subscribe((res:any) => {
      console.log("SUCESS ===",res);
      this.Nombre = '';
      this.Apellido = '';
      this.Carrera = '';
      this.Matricula = '';
      alert("SUCESS");
      this.getStudent();
    },(error: any) => {
      alert("Error")
    console.log("error =====", error);
  })
  }

  getStudent(){
    this._ApiService.getStudent().subscribe((res:any) => {
      console.log("Success ===",res);
      this.students = res;
    },(error: any) => {
    console.log("error =====", error);
  })
  }

  deleteStudent(id){
    this._ApiService.deleteStudent(id).subscribe((res:any) =>{
      console.log("success", res);
      this.getStudent();
    }, (error:any) =>{
      console.log("error =====", error);
    })
  }
}
