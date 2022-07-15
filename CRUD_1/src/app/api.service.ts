import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 

    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('content-type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }


  addStudent(data){
    return this.http.post('http://localhost/CRUD MYSQL/Backend/create.php', data);
  }

  getStudent(){
    return this.http.get('http://localhost/CRUD MYSQL/Backend/getStudentes.php');
  }
  deleteStudent(id){
    return this.http.delete('http://localhost/CRUD MYSQL/Backend/delete.php?id='+id);
  }
}
