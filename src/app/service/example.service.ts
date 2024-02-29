import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  var_service="Estoy en mi servicio";
  api_url='https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient){}

  obenerLista(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  onclickbutton(text:string){
    console.log(text);
    this.var_service= text;
  }
}