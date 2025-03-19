/*
### 1. Exercício: Decorator
**Cenário**: Você está desenvolvendo um sistema de pedidos para uma cafeteria. O cliente pode adicionar complementos ao pedido, como leite, açúcar, canela, etc. Cada complemento tem um custo adicional.

**Objetivo**:
1. Crie uma interface `Beverage` com um método `cost(): number` e uma descrição `getDescription(): string`.
2. Crie uma classe base chamada `Coffee` que implementa `Beverage`.
3. Implemente decoradores como `Milk`, `Sugar` e `Cinnamon` que adicionem custos e descrições ao pedido de café.
4. Use os decoradores para criar combinações dinâmicas de pedidos.
*/

export interface Beverage {
    cost() : number;
    getDescription() : string;
}

export type Coffee = {
    price : number,
    description : string | null
}