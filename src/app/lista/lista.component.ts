import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  public produtos: any[]=[]

  constructor(private proutoService: ProdutosService){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(){

    this.proutoService.getProdutos().subscribe(

      produtosDaApi => {
        this.produtos = produtosDaApi
      }
    )

}
}