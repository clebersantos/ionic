import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public urlUsuario = "http://localhost:8000/usuario";
  constructor(public http: HttpClient) { }

  public findAll(): Observable<any> {
    return this.http.get(this.urlUsuario);
  }

  public salvar(usuario): Observable<any> {
    return this.http.post(this.urlUsuario, usuario);
  }

  public editar(usuario): Observable<any> {
    return this.http.put(`${this.urlUsuario}/${usuario.id}`, usuario)
  }

  public deletar(id): Observable<any> {
    return this.http.delete(`${this.urlUsuario}/${id}`);
  }
}
