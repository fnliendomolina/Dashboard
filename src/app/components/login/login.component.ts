import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin:FormGroup;
  loading:boolean = false;

  constructor(private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private router:Router) {
      this.formLogin = this.fb.group({
        usuario: ['',Validators.required],
        contraseña: ['', Validators.required]
      });
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario:string = this.formLogin.value.usuario;
    const pass:string = this.formLogin.value.contraseña;
    if (usuario === "fede" && pass === "1234") {
      this.fakeLoading();
    }
    else {
      this.error();
      this.formLogin.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña incorrecta', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    },2500);
  }

}
