import { Component } from '@angular/core';
import { formularioRegistro } from './app.model';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioRegistro:formularioRegistro = {
    name:'',
    email:'',
   /*  password:'' */
  }
  Data:any= localStorage.getItem('Usuario');
  pokemones!:any;
  nombre!:string;
  imagen!:string;

  constructor( private appService:AppService ){}

  ngOnInit(): void {
      this.Data = JSON.parse(this.Data);

      this.appService.obtenerDatos().subscribe(
        (valor)=>{
          this.pokemones = valor;
          this.imagen=this.pokemones.sprites.front_default;
          this.nombre = this.pokemones.name
          console.log(this.pokemones);
      });


  }



  saveForm(){
    let storageVal=  localStorage.getItem('Usuario');
    if(storageVal == undefined){
      localStorage.setItem('Usuario',JSON.stringify([this.formularioRegistro]) );
    }else{
      let array = JSON.parse(storageVal);
      array.push(this.formularioRegistro)
      localStorage.setItem('Usuario',JSON.stringify(array))
    }
    this.formularioRegistro = {
      name:'',
      email:'',
      password:''
    }
    window.location.reload()

  }

  clearForm(){
    this.formularioRegistro = {
      name:'',
      email:'',
      password:''
    }
  }

}
