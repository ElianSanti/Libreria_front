import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BookResponse, Libro } from '../interfaces/libro.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private _libroUrl:string = environment.librosUrl;

  constructor(private http:HttpClient) { }

  getLibros(){
    return this.http.get<BookResponse>(`${this._libroUrl}`)
      .pipe(
        map(datos=>{
          const libros = Object.values(datos.Libros)
          return libros
        })
      )
  }

  getPorId(id:string){
    return this.http.get<BookResponse>(`${this._libroUrl}/${id}`)
  }

  getPorNombre(nombre:string){
    return this.http.get<BookResponse>(`${this._libroUrl}/name/${nombre}`).pipe(
      map(datos=>{
        const libros = datos.Libros
        return libros
      })
    )
  }
  
  deleteLibro(id:string){
    return this.http.delete<BookResponse>(`${this._libroUrl}/delete/${id}`)
  }

  updateLibro(id:string, datos:Libro){
    return this.http.put(`${this._libroUrl}/update/${id}`, datos)
  }

  createLibro(libro:Libro){
    return this.http.post(`${this._libroUrl}/create`,libro)
  }

}
