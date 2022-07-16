import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Personas } from '../personas';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-deletepersona',
  templateUrl: './deletepersona.component.html',
  styleUrls: ['./deletepersona.component.css']
})
export class DeletepersonaComponent implements OnInit {

  persona: Personas = new Personas();
  constructor(private personaServicio : PersonaService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.persona);
  }

  guardarpersona(){
  this.personaServicio.registrarPersona(this.persona).subscribe(dato => {
    console.log(dato);
    this.irlistapersonas();
  })
}
  irlistapersonas (): void{
    this.router.navigate(["./persona"]);
 }

  onSubmit(){
    this.guardarpersona();
  }
}
