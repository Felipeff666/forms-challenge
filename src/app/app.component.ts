import { Component } from '@angular/core';
import { formularioRegistro } from './app.model';

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
  ngOnInit(): void {
      this.Data = JSON.parse(this.Data);
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
