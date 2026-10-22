import { Component } from '@angular/core';
import { PedidosService } from '../Services/pedidos-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-pedidos',
  styleUrl: './lista-pedidos.css',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos {
    constructor(public pedidoService: PedidosService) { 
    }   

    getPedidos() {
        return this.pedidoService.listar();
    }
}
