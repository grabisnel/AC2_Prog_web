import { Routes } from '@angular/router';
import { CadastrarPedido } from './cadastrar-pedido/cadastrar-pedido';
import { ListaPedidos } from './lista-pedidos/lista-pedidos';

export const routes: Routes = [

    {path: '', component: CadastrarPedido},
    {path: 'lista-pedidos', component: ListaPedidos},
];
