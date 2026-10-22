import { Injectable } from '@angular/core';

export interface Pedidos {
    id: number;
    nome: string;
    status:  'Pendente' | 'Aceito' | 'Em Preparo' | 'Pronto' | 'Saiu para Entrega' | 'Entregue';
}

@Injectable({ providedIn: 'root' })
export class PedidosService {

    private pedidos: Pedidos[] = [];
    private proximoId = 1;

    listar(): Pedidos[] {
        return this.pedidos;
    }

    adicionar(nome: string) {
        this.pedidos.push({
            id: this.proximoId++,
            nome,
            status: 'Pendente'
        });
    }

    remover(id: number) {
        this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
    }

    pedidoAceito(id: number) {
        const pedido = this.pedidos.find(pedido => pedido.id === id);
        if (pedido) {
            pedido.status = 'Aceito';
        }
    }

    pedidoEmPreparo(id: number) {
        const pedido = this.pedidos.find(pedido => pedido.id === id);
        if (pedido) {
            pedido.status = 'Em Preparo';
        }
    }

    pedidoPronto(id: number) {
        const pedido = this.pedidos.find(pedido => pedido.id === id);
        if (pedido) {
            pedido.status = 'Pronto';
        }
    }

    pedidoSaiuParaEntrega(id: number) {
        const pedido = this.pedidos.find(pedido => pedido.id === id);
        if (pedido) {
            pedido.status = 'Saiu para Entrega';
        }
    }

    pedidoEntregue(id: number) {
        const pedido = this.pedidos.find(pedido => pedido.id === id);
        if (pedido) {
            pedido.status = 'Entregue';
        }
    }

}
