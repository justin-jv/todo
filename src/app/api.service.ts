import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getTodo(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/')
  }

  createTodo(task: any) {
    let a = "https://jsonplaceholder.typicode.com/todos/";
    let b = a;
    return this.http.post('b', task);
  }
  
}
