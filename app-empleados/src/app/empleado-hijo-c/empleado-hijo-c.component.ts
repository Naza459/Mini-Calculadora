import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }
    empleados:Empleado[]=[
    new Empleado("Jesus","Mejias","Electricista",2500),
    new Empleado("Yaritza","Jimenez","Profesora y Diseñadora",1500),
    new Empleado("Eneiyairth","Mejias","Construción Civil",1000),
    new Empleado("Jesus Manuel","Mejias","Duncan Gerencia",2500),
    new Empleado("Mireivi","Díaz","Maestra",7500),
    new Empleado("Yairuth","Mejias","Ingeniera Informatica",2500)

    ];
  empleadoAgregado(empleado:Empleado){

    this.empleados.push(empleado);
  }
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
