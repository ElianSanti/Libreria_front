import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/libro.interface';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subir-libro',
  templateUrl: './subir-libro.component.html',
  styleUrls: ['./subir-libro.component.css']
})
export class SubirLibroComponent implements OnInit {

  libro:Libro = {
    name: '',
    author: '',
    year: '',
    keywords: '',
    editorial: ''
  }

  constructor(private libroSV:LibrosService, private router:Router) { }

  ngOnInit(): void {
  }

  subir(){
    Swal.fire({
      title: 'Está todo listo?',
      showCancelButton: true,
      confirmButtonText: 'Subir libro',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('El libro se subió correctamente!', '', 'success')
        this.libroSV.createLibro(this.libro).subscribe(resp=>{
          this.router.navigateByUrl('/libreria')
            console.log(resp)
        })
      }
    })
    
  }
}
