import { databaseService } from "./databaseService";

interface CoffeeData {
    price: number;
    description: string | null;
}

export async function createCoffee(): Promise<CoffeeData> {
    try {
        await databaseService.connectDB();
        const dbData = await databaseService.getCoffeeData();
        if (!dbData) throw new Error("No coffee data found");

        return {
            price: dbData.price,
            description: dbData.description.trim(),
        };
    } catch (error) {
        console.error("Error fetching coffee data:", error);
        throw new Error("Failed to fetch coffee data");
    }
}

export async function createCoffeeWithMilk(): Promise<CoffeeData> {
    try {
        await databaseService.connectDB();
        const dbData = await databaseService.getCoffeeWithMilkData();
        if (!dbData) throw new Error("No coffee with milk data found");

        return {
            price: dbData.price,
            description: dbData.description,
        };
    } catch (error) {
        console.error("Error fetching coffee with milk data:", error);
        throw new Error("Failed to fetch coffee with milk data");
    }
}

export async function createCoffeeWithSugar(): Promise<CoffeeData> {
    try {
        await databaseService.connectDB();
        const dbData = await databaseService.getCoffeeWithSugarData();
        if (!dbData) throw new Error("No coffee with sugar data found");

        return {
            price: dbData.price,
            description: dbData.description,
        };
    } catch (error) {
        console.error("Error fetching coffee with sugar data:", error);
        throw new Error("Failed to fetch coffee with sugar data");
    }
}

export async function createCoffeeWithCinnamon(): Promise<CoffeeData> {
    try {
        await databaseService.connectDB();
        const dbData = await databaseService.getCoffeeWithCinnamonData();
        if (!dbData) throw new Error("No coffee with cinnamon data found");

        return {
            price : dbData.price,
            description : dbData.description,
        };
    } catch (error) {
        console.error("Error fetching coffee with cinnamon data:", error);
        throw new Error("Failed to fetch coffee with cinnamon data");
    }
}
