import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    *{
      margin: 15px
    }
  `
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  get usuario(){
    return this.authService.usuario;
  }


  logout(){
    this.router.navigateByUrl('/auth/login')
    this.authService.logout()
  }

}
