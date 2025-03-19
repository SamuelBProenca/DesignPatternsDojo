import { databaseService } from "./databaseService";
import { Coffee } from "../BeverageProcessor/BasicBeverageProcessor";
import { Milk } from "../BeverageProcessor/MilkBeverageProcessor";
import { Sugar } from "../BeverageProcessor/SugarBeverageProcessor";
import { Cinnamon } from "../BeverageProcessor/CinnamonBeverageProcessor";

interface CoffeeData {
    price: number;
    description: string;
}

async function createCustomCoffee(options: { milk?: boolean, sugar?: boolean, cinnamon?: boolean }): Promise<CoffeeData> {
    try {
        await databaseService.connectDB();
        const dbData = await databaseService.getCoffeeData();
        if (!dbData) throw new Error("No coffee data found");

        let coffee = new Coffee({ price: dbData.price, description: dbData.description });

        if (options.milk) {
            coffee = new Milk(coffee);
        }
        if (options.sugar) {
            coffee = new Sugar(coffee);
        }
        if (options.cinnamon) {
            coffee = new Cinnamon(coffee);
        }

        return {
            price: coffee.cost(),
            description: coffee.getDescription(),
        };
    } catch (error) {
        console.error("Error fetching custom coffee data:", error);
        throw new Error("Failed to fetch custom coffee data");
    }
}

export { createCustomCoffee };
