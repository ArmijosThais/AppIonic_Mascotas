import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../models/Mascota';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-registro-mascota',
  templateUrl: './registro-mascota.page.html',
  styleUrls: ['./registro-mascota.page.scss'],
})
export class RegistroMascotaPage implements OnInit {

  mascota:any = {
    nombre:'',
    raza:'',
    edad:'',
    estado:'0',
    urlImage:''
  }

  constructor(private mascotaService:MascotasService, private route:Router, private route2: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route2.snapshot.paramMap;
  }

  registrarMascota(mascota:Mascota){
    this.mascotaService.insertarMascota(mascota).subscribe(
      (res) => this.route.navigate(['/inicio']),
      (err) => console.log(err)
    )
  }

}
