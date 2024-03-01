import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14


  }

  ver(usuario: any) {
    this.mapOptions = {
      ...this.mapOptions,
      center: usuario.posicion
    }

  }



  formularioEntrada: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  }
  )



  usuarios: { name: string, description: string, posicion: any }[] = [];
  posicion: any = null
  guardarUsuario() {
    const nombre = this.formularioEntrada.get('name')?.value;
    const descripcion = this.formularioEntrada.get('description')?.value;
    this.usuarios.push({ name: nombre, description: descripcion, posicion: this.posicion });
    this.formularioEntrada.reset();
  }


  eliminarCard(usuario: any, index: number) {

    if (index >= 0) {
      this.usuarios.splice(index, 1);
    }
  }
  pos: any = null
  enviarDatos(usuario: any, index: number) {
    console.log(usuario)
    this.formularioEntrada.setValue({ name: usuario.name, description: usuario.description })
    this.posicion = usuario.posicion
    let obj = { index }
    this.pos = obj;
  }

  editarusu() {
    const nombre = this.formularioEntrada.get('name')?.value;
    const descripcion = this.formularioEntrada.get('description')?.value;
    this.usuarios[this.pos.index] = { name: nombre, description: descripcion, posicion: this.posicion }
    this.formularioEntrada.reset();
  }
  addMarker(event: any) {
    console.log(event.latLng.lat())
    let obj = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    this.posicion = obj;
    console.log(obj)

  }


}

