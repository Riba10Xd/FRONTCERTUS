import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Personas } from '../personas';

@Component({
  selector: 'app-registrarpersona',
  templateUrl: './registrarpersona.component.html',
  styleUrls: ['./registrarpersona.component.css']
})
export class RegistrarpersonaComponent implements OnInit {

  persona: Personas = new Personas();
  constructor(private personaServicio :PersonaService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.persona);
  }
  guardapersona() {
    this.personaServicio.registrarPersona(this.persona).subscribe(dato => {
      console.log(dato);
      this.irlistapersonas();
  })
}
 irlistapersonas (){
    this.router.navigate(["./personas"]);
 }
  onSubmit(){
    this.guardapersona();
  }
}
