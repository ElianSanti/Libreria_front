import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Libro } from '../../interfaces/libro.interface';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {

  id:string = ''
  libro:Libro = {
    _id: '',
    name: '',
    author: '',
    year: '',
    keywords: '',
    editorial: '',
  }

  constructor(private ruta:ActivatedRoute, private libroSV:LibrosService, private router:Router) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(({id})=>{
      this.id = id
      this.libroSV.getPorId(id).subscribe(datos=>{
        this.libro = datos.Libro
        console.log(this.libro)
      })
    })
  }
  
  actualizar(){
    this.libroSV.updateLibro(this.id, this.libro)
      .subscribe(resp=>{
        Swal.fire({
          title: 'Actualizar libro?',
          showCancelButton: true,
          confirmButtonText: 'Actualizar',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Actualizado!', '', 'success')
            this.router.navigateByUrl('/libreria')
          }
        })
      })
  }

}
