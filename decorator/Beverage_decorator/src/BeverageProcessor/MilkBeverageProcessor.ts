import { Beverage } from "../interfaces/BeverageProcessorInterface";
import { databaseService } from "../services/databaseService";
import { Coffee } from "../interfaces/BeverageProcessorInterface"

class Milk implements Beverage {
    private beverage : Beverage;
    private milkData : Coffee; 

    constructor(beverage: Beverage, milkData : Coffee) {
        this.beverage = beverage;
        this.milkData = milkData;
    }

    cost() : number {
        return this.beverage.cost() + this.milkData.price;
    }

    getDescription() : string {
        return this.beverage.getDescription() + `, ${this.milkData.description}`;
    }
}

export { Milk };
