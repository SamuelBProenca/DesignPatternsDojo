info : {
    // ### **3. Exercício: Gerenciador de Pedidos (Factory + Strategy)**
    // #### Cenário:
    // Você está criando um sistema para gerenciar pedidos em um restaurante. O restaurante aceita diferentes formas de entrega:
    // - Retirada no balcão.
    // - Entrega por motoboy.
    // - Entrega via aplicativo de entrega (ex.: Uber Eats).
    
    // Cada forma de entrega tem uma lógica específica:
    // - **Retirada**: Apenas registra o pedido no sistema.
    // - **Motoboy**: Adiciona uma taxa de entrega fixa.
    // - **Aplicativo**: Calcula uma taxa dinâmica com base no valor do pedido.
}
tasks: {
    // #### Tarefas:
    // 1. Crie uma classe `DeliveryMethod` e implemente uma subclasse para cada tipo de entrega:
    //    - `CounterDelivery` (retirada).
    //    - `MotoboyDelivery`.
    //    - `AppDelivery`.
    // 2. Use o padrão **Factory** para criar instâncias de `DeliveryMethod` com base no tipo.
    // 3. Simule o processamento de pedidos:
    //    ```typescript
    //    const order = { id: 1, total: 100 }; // Valor do pedido: R$100
    //    const deliveryType = "motoboy"; // Pode ser "counter", "motoboy", ou "app"
    //    ```
    //    Calcule o valor final do pedido com base na forma de entrega.
}

interface Order{
    id: number;
    total: number;
}

interface delivery{
    entrega(order : Order) : void;
}
class CalcTax{
    static calcTax(tax : number, total: number) : number{
        return total + tax;
    }
}

class CounterDelivery implements delivery{
    private taxaFixa : number = 5;
    entrega(order : Order) : void {
        const total = CalcTax.calcTax(this.taxaFixa, order.total);
        console.log(`entrega do pedido: ${order.id} retirada na bancada, valor total de ${total}`)
    }
}
class MotoboyDelivery implements delivery{
    private taxaFixa : number = 10;
    entrega(order : Order ) : void{
        const total = CalcTax.calcTax(this.taxaFixa, order.total);
        console.log(`entrega do pedido: ${order.id} via Motoboy, valor total de ${total}`);
    }
}
class AppDelivery implements delivery{
    entrega(order : Order) : void{
        const taxaDinamica : number = order.total * 0.1;
        const total = CalcTax.calcTax(taxaDinamica, order.total);
        console.log(`entrega do pedido: ${order.id} via app, valor total de ${total}`)
    }
}

class DeliveryMethod{
    static createDeliveryMethod(method : string) : delivery {
        if(method === 'counter'){
            return new CounterDelivery();
        }
        else if(method === 'motoboy'){
            return new MotoboyDelivery()
        }
        else if(method === 'app'){
            return new AppDelivery()
        }
        else{
            throw new Error('Método de entrega inválido!')
        }
    }
}