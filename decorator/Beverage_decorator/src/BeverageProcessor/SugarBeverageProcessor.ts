import { Beverage } from "../interfaces/BeverageProcessorInterface";
import { databaseService } from "../services/databaseService";
import { Coffee } from "../interfaces/BeverageProcessorInterface"


class Sugar implements Beverage {
    private beverage : Beverage;
    private sugarData : Coffee;

    constructor(beverage : Beverage, sugarData : Coffee){
        this.beverage = beverage;
        this.sugarData = sugarData;
    }

    cost(): number {
        return this.beverage.cost() + this.sugarData.price;
    }
    
    getDescription(): string {
        return this.beverage.getDescription() + this.sugarData.description;
    }
} 

export { Sugar }