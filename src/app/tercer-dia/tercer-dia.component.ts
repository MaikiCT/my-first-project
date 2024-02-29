import { Component } from '@angular/core';
import { ExampleService } from '../service/example.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
  name ="";
  users:any = [];
constructor(public exampleService:ExampleService){

  }

  ngOnInit() {
    this.exampleService.obenerLista().subscribe(resp =>{
      console.log(resp);
      this.users = resp;
    })
      
    }
    editartexto(text:string){
      console.log(text)
      return text;

    }
  }
