import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [];

  constructor() { 
  }

  agregarUsuario(usuario:any) {
    this.listUsuarios.push(usuario);
  }

  getUsuarios() {
    return this.listUsuarios;
  }

  eliminarUsuario(index:number) {
    return this.listUsuarios.splice(index,1);
  }
}
