import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string = ''
  card = {
    title: 'Titulo principal',
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia mollitia molestias optio sequi ipsa ab dicta reprehenderit facere molestiae sed eaque id, voluptatibus hic non officia laboriosam corrupti suscipit. Hic."
     }
}
