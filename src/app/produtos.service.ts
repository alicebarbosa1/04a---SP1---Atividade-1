import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private HttpClient: HttpClient) { }

  getProdutos(): Observable<any> {
    return this.HttpClient.get("Http://localhost:3000/produtos")

  }
}
