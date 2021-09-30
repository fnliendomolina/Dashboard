import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  sexo: any[] = [
    'Masculino',
    'Femenino',
  ];

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private usuarioService:UsuarioService,
              private router:Router,
              private _snackBar:MatSnackBar) { 
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      sexo: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    this.usuarioService.agregarUsuario(this.form.value);
    this.router.navigate(["/dashboard/usuarios"]);
    this._snackBar.open('Usuario agregado correctamente', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500
    });
  }



}
