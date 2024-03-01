import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerDiaComponent, SegundoDiaComponent, RouterModule,TercerDiaComponent, ProyectoFinalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ejemplo = 'si';
  
   
}


