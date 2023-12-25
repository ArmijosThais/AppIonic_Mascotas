import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Mascota } from '../models/Mascota';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  mascotas:any = []
  todas:any = []
  adoptados:any=[]
  pendientes:any=[]

  constructor(private mascotaService:MascotasService, private alertController:AlertController, private route:Router, private route2: ActivatedRoute) { }

  ngOnInit() {
    this.cargarMascotas()
  }

  ionViewWillEnter(){
    this.cargarMascotas()
  }

  cambiarEstado(){
    console.log("ok");
  }

  cargarMascotas(){
    this.mascotaService.obtenerMascotas().subscribe(
      (res) => {
        this.todas = res
      },
      (err) => {
        console.log(err)
      }
      )
    this.mascotas=this.todas  
  }

  cargarApotadas(){
    this.mascotaService.obtenerMascotas().subscribe(
      (res) => {
        this.todas = res
      },
      (err) => {
        console.log(err)
      }
      )
    var j = 0
    var adoptados:any=[]
    for(let i in this.todas){
      if (this.todas[i].estado==="1") {
        adoptados[j] = this.todas[i]
        j++
      }
    }
    this.mascotas = adoptados
    
  }

  cargarPendientes(){
    this.mascotaService.obtenerMascotas().subscribe(
      (res) => {
        this.todas = res
      },
      (err) => {
        console.log(err)
      }
      )
    var j = 0
    var pendientes:any=[]
    for(let i in this.todas){
      if (this.todas[i].estado == "0") {
        pendientes[j] = this.todas[i]
        j++
      }
    }
    this.mascotas = pendientes
  }

  async eliminarMascota(mascota:Mascota){
    const alert = await this.alertController.create({
      header:'Eliminar Mascota',
      message: `Desea eliminar a ${mascota.nombre}`,
      buttons:[
        {
          text:'OK',
          handler:()=>{
            this.mascotaService.eliminarMascota(mascota._id).subscribe(
              (res)=>this.cargarMascotas(),
              (err)=>console.log(err)
            )
          }
        }, 'Cancelar'
      ]
    })
    alert.present()
  }

}
