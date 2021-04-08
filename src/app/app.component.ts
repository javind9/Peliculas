import { Component } from '@angular/core';
import { Pelicula } from 'src/models/pelicula-response.interface';
import { PeliculaService } from './service/swapi.service';
import { MatDialog } from '@angular/material';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listadoPelicula: Pelicula[] 

  constructor(private peliculaservice :PeliculaService) { }

  ngOnInit() {
    this.loadPelicula();
  }
  loadPelicula() {
    this.peliculaservice.getPelicula().subscribe(resp => {
    this.listadoPelicula = resp.results;
    });
  }

  displayedColumns: string[] = ['title', 'director','producer','release_date'];
  
}
