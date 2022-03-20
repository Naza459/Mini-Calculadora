import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[

    new Empleado("Jesus","Mejias","Electricista",2500),
    new Empleado("Yaritza","Jimenez","Profesora y Diseñadora",1500),
    new Empleado("Eneiyairth","Mejias","Construción Civil",1000),
    new Empleado("Jesus Manuel","Mejias","Duncan Gerencia",2500),
    new Empleado("Mireivi","Díaz","Maestra",7500),
    new Empleado("Yairuth","Mejias","Ingeniera Informatica",2500)

  ];

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario) /*Esto se hizo para colocar otro registro*/ 
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


}
