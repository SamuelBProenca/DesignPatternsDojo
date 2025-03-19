/*
##Cenário:
Você está criando um sistema de transportes que possui diferentes tipos de veículos (como
Car e Bike ). Dependendo do tipo solicitado, o sistema deve criar o veículo correspondente.
O problema é que o código de criação está espalhado, e você quer centralizá-lo.
Código Inicial:

// Interfaces para os veículos
interface Vehicle {
    move(): void;
}
class Car implements Vehicle {
    move(): void {
    console.log("Dirigindo um carro!");
}
}
class Bike implements Vehicle {
    move(): void {
    console.log("Andando de bicicleta!");
}
}
// Refatore o código para criar uma fábrica que centralize a criação de
veículos.

## Objetivo:
1. Crie uma classe VehicleFactory com um método estático createVehicle(type:
string): Vehicle .
2. Use a fábrica para criar os veículos Car e Bike dinamicamente.
*/

interface Vehicle {
    move(): void;
}

class Car implements Vehicle {
    move(): void {
        console.log("Dirigindo um carro!");
    }
}

class Bike implements Vehicle {
    move(): void {
        console.log("Andando de bicicleta!");
    }
}

class VehicleFactory {
    static createVehicle(type: string): Vehicle {
        if (type == "car") {
            return new Car()
        } else if (type == "bike") {
            return new Bike();
        } else {
            throw new Error("Tipo de veículo não suportado")
        }
    }
}

const car = VehicleFactory.createVehicle("car");
car.move()

const bikeBMX = VehicleFactory.createVehicle("bike");
bikeBMX.move()