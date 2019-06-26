import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UsuarioService],
})
export class HomePage {
  public usuarios =  [];
  public usuarioCadastro = {"id": "", "nome": "", "idade": ""};

  constructor(private usuarioService:UsuarioService) {
    this.getUsuarios();
  }

  public getUsuarios() {
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

  public popularForm(usuario) {
    this.usuarioCadastro = usuario;
  }

  public salvarUsuario() {
    if (this.usuarioCadastro.id === "") {
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    } else {
      this.usuarioService.editar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    }
  }

  public deletarUsuario(id) {
    this.usuarioService.deletar(id).subscribe(response => this.getUsuarios());
  }
}
