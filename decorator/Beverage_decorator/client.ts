import { Coffee } from "./src/BeverageProcessor/BasicBeverageProcessor";
import { Milk } from "./src/BeverageProcessor/MilkBeverageProcessor";
import { createCoffeeWithMilk } from "./src/services/CoffeeService";
import { databaseService } from "./src/services/databaseService";

(async () => {
    try {
        await databaseService.connectDB();
        
        const coffeeData = await createCoffeeWithMilk(); // Agora buscamos a versão com leite do serviço!
        const coffee = new Coffee(coffeeData);

        const coffeeWithMilk = new Milk(coffee);

        console.log(`Description: ${coffeeWithMilk.getDescription()}`);
        console.log(`Cost: $${coffeeWithMilk.cost()}`);
    } catch (error) {
        console.error("Error in client execution:", error);
    }
})();
