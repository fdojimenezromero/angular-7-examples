import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent {
  public nombre_componente = 'Componente fruta';
  public listado_componente = 'Naranja, Manzana y Sandia';

  public nombre:String;
  public edad:number;
  public mayorEdad:boolean;
  public trabajos:Array<string>;
  public object:any = 'Similar a Object de Java';


  //Se lanza antes del init
  constructor(){
    this.nombre = 'Fernando';
    this.edad = 19;
    this.mayorEdad = this.edad > 18;
    this.trabajos =  ['Developer','Tester','QA'];
  }

  //Se lanza despues del constructor
  ngOnInit(){
    this.holaMundo("CHIWI")
   }

  holaMundo(name){
    alert("HOLA: "+name);
  }
}
