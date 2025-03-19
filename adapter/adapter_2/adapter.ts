/*
4. Exercício: Adapter

Cenário:
Você está criando uma aplicação que precisa exibir informações de vários serviços de
terceiros, mas os formatos de dados retornados por esses serviços são diferentes. Por
exemplo:

O Serviço A retorna o nome do usuário como username .
O Serviço B retorna o nome do usuário como userName .

Seu objetivo é padronizar esses formatos para que todos sejam representados como name .
Instrução:

instrução
1. Crie duas classes que simulam os Serviços A e B:
class ServiceA {
    getUserData(): { username: string } {
        return { username: "John_Doe_A" };
    }
}
class ServiceB {
    getUserDetails(): { userName: string } {
        return { userName: "John_Doe_B" };
    }
}
2. Implemente um Adapter para cada serviço para converter os dados em um formato
comum:
interface StandardUser {
    name: string;
}
*/

class ServiceA {
    getUserData(): { username: string } {
        return { username: "Samuel_A" };
    }
}

// Serviço B: Dados no formato "userName"
class ServiceB {
    getUserDetails(): { userName: string } {
        return { userName: "Samuel_B" };
    }
}

// Interface Padrão: "StandardUser"
interface StandardUser {
    name: string;
}

// Adapter para o Serviço A
class ServiceAAdapter implements StandardUser {
    private serviceA: ServiceA;

    constructor(serviceA: ServiceA) {
        this.serviceA = serviceA;
    }

    get name(): string {
        return this.serviceA.getUserData().username;
    }
}

// Adapter para o Serviço B
class ServiceBAdapter implements StandardUser {
    private serviceB: ServiceB;

    constructor(serviceB: ServiceB) {
        this.serviceB = serviceB;
    }

    get name(): string {
        return this.serviceB.getUserDetails().userName;
    }
}

// Testando os Adapters
const serviceA = new ServiceA();
const serviceB = new ServiceB();

const adapterA = new ServiceAAdapter(serviceA);
const adapterB = new ServiceBAdapter(serviceB);

console.log(adapterA.name); // Saída: "Samuel_A"
console.log(adapterB.name); // Saída: "Samuel_B"
