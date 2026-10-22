import { Component } from '@angular/core';
import { PedidosService } from '../Services/pedidos-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-pedido',
  styleUrl: './cadastrar-pedido.css',
  templateUrl: './cadastrar-pedido.html',
})
export class CadastrarPedido {
  nome: string = '';

  constructor(public pedidoService: PedidosService) { 

  } 
  
  
  cadastrarPedido() {
    this.pedidoService.adicionar(this.nome);
    this.nome = '';
  }


}
