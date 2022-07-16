import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Personas } from '../personas';

@Component({
  selector: 'app-modificarpersona',
  templateUrl: './modificarpersona.component.html',
  styleUrls: ['./modificarpersona.component.css']
})
export class ModificarpersonaComponent implements OnInit {

  persona: Personas = new Personas();
  constructor(private personaServicio :PersonaService, private router: Router) { }
  

  ngOnInit(): void {
    console.log(this.persona);
  }
  guardapersona() {
    this.personaServicio.modificarPersona(this.persona).subscribe(dato => {
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

