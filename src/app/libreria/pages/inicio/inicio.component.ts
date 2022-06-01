import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Libro } from '../../interfaces/libro.interface';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  termino:string = ''
  libros:Libro[] =[]

  constructor(private libroSv:LibrosService) { }

  ngOnInit(): void {
    this.libroSv.getLibros().subscribe(m=>{
      this.libros = m;
      console.log(this.libros)
    })
  }

  deleteLibro(index:number,id:string){
    this.libroSv.deleteLibro(id).subscribe(res=>{
      Swal.fire({
        title: 'Estás seguro que quieres eliminar el libro?',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Eliminado!', '', 'success')
          this.libros.splice(index)
          console.log(res)
        }
      })
    })
  }

  sugerencia(termino:string){
    this.termino = termino
    if (this.termino.length > 0) {
      this.libros = []
      this.libroSv.getPorNombre(this.termino).subscribe(res=>{
        this.libros = res
        console.log(res)
      })
    }else{
      this.libroSv.getLibros().subscribe(res=>{
        this.libros = res
      })
    }
    
  }
}
