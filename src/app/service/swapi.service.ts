import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPeliculas } from '../../models/pelicula-response.interface';


const authURL = 'https://swapi.dev/api/films/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) {  
  }

  public getPelicula(): Observable<ListaPeliculas> {
    return this.http.get<ListaPeliculas>(
      authURL,
      requestOptions
    );
  }
}