export class Mascota {
    _id?:string
    nombre: string
    raza:string
    edad:string
    estado:string
    urlImage:string

    constructor(nombre:string,raza:string,edad:string,estado:string,urlImage:string){
        this.nombre=nombre
        this.raza = raza
        this.edad = edad
        this.estado = estado
        this.urlImage = urlImage
    }
}