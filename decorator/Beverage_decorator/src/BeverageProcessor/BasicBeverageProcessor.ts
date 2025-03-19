import { Beverage } from '../interfaces/BeverageProcessorInterface';

class Coffee implements Beverage {
    private price : number; 
    private description : string;

    constructor(config :  {price : number, description : string}){
        this.price = config.price;
        this.description = config.description;
    }
    
    public cost() : number{
        return this.price
    }
    public getDescription() : string {
        return this.description
    }
}

export { Coffee };