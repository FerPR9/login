import { Component } from '@angular/core';
//import { Usuario } from 'src/app/models/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/models/Usuario';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuario: Usuario = {
    id: 0,
    nomUsuario: '',
    correoElectronico: '',
    passw: '',
    telefono: ''
  }
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  }

