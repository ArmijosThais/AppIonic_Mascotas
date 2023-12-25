import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../models/Mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  API = "http://localhost:4500/api/mascotas"

  constructor(private http:HttpClient) { }

  obtenerMascotas(){
    return this.http.get(this.API)
  }

  obtenerMascota(id:string){
    return this.http.get(`${this.API}/${id}`)
  }

  insertarMascota(mascota:Mascota){
    return this.http.post(this.API,mascota)
  }

  eliminarMascota(id:any){
    return this.http.delete(`${this.API}/${id}`)
  }

  actualizarMascota(mascota:Mascota){
    return this.http.put(`${this.API}/${mascota._id}`,mascota)
  }
}
