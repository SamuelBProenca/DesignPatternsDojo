import { Beverage } from "../interfaces/BeverageProcessorInterface";
import { databaseService } from "../services/databaseService";
import { Coffee } from "../interfaces/BeverageProcessorInterface"

class Cinnamon implements Beverage {
    private beverage : Beverage;
    private cinnamonData : Coffee;

    constructor(beverage : Beverage, cinnamonData : Coffee){
        this.beverage = beverage;
        this.cinnamonData = cinnamonData;
    }

    cost() : number {
        return this.beverage.cost() + this.cinnamonData.price;
    }

    getDescription(): string {
        return this.beverage.getDescription() + `, ${this.cinnamonData.description}`;
    }
}

export { Cinnamon };