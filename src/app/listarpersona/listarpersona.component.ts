import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Personas } from '../personas';


@Component({
  selector: 'app-listarpersona',
  templateUrl: './listarpersona.component.html',
  styleUrls: ['./listarpersona.component.css']
})
export class ListarpersonaComponent implements OnInit {

  personas: Personas [];

  constructor(private personaservice: PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  private obtenerPersonas (){
    this.personaservice.obtenerListaPersonas().subscribe(dato => {
        this.personas=dato;
    })
  }

}
