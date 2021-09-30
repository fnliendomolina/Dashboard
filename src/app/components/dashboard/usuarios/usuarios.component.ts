import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {


  listUsuarios:Usuario[] = [];
  dataSource!:MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private usuarioService:UsuarioService,
              private _snackBar:MatSnackBar) {

   }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; //fede
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listUsuarios = this.usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);

  }

  eliminarUsuario(index:number) {
    this.usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
    this._snackBar.open('Usuario eliminado correctamente', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500
    });
  }

}
