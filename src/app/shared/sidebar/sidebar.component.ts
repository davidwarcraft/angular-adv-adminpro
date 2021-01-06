import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {


  public usuario: Usuario;
 
  
  constructor(public sidebarService: SidebarService, usuarioService: UsuarioService) { // Volvemos publico el servicio para poder utilizarlo en el html y pasarlo por referencia de donde viene la data
    //this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
   }

  ngOnInit(): void {
  }

}
