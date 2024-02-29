import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule , Validators} from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {

  variable = ''
  btn_class = 'btn btn-success'
  formulariouser:FormGroup = new FormGroup({
   name: new FormControl(''),
   description: new FormControl('')
  })
  name= ''
  description=''
  user = [ 
    {
      name:'Luis',
      description: '1'
    },
    {
      name:'Carlos',
      description: '5'
    },
    {
      name:'Antonio',
      description: '9'
    }

]


constructor() {
 //  console.log("se ejecuto el constructor")
}

ngOnInit() {
  //console.log("se inicio el programa")
}

ngDoCheck(): void {
   //console.log("se ejecuto docheck");
}
clickButton(text: string) {
  //  console.log("el valor que recibe -->", text)
  this.variable = text;

}
ngOnDestroy() {
 //console.log("se ejecuto el onDestroy");
}
submitForm(){
  let obj={
  name:this.name,
   description:this.description
  }
console.log("el nombre es -->",obj)
// this.formulariouser.controls['name'].disable()
// console.log( );
console.log(this.formulariouser.value);
}

  }