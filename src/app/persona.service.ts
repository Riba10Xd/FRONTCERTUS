import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Personas } from './personas';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL = "http://localhost:8080/ApiRest/personas";

  constructor(private httpClient : HttpClient) {}

    obtenerListaPersonas(): Observable<Personas[]>{
      return this.httpClient.get<Personas[]>(`${this.baseURL}`);
    }
    registrarPersona(persona:Personas): Observable<object>{
      return this.httpClient.post(`${this.baseURL}`,persona);
    }
    modificarPersona(persona:Personas): Observable<object>{
      return this.httpClient.put(`${this.baseURL}`,persona);
    }
    deletePersona(persona:Personas): Observable<object>{
      return this.httpClient.delete(`${this.baseURL}`);
    }
}
