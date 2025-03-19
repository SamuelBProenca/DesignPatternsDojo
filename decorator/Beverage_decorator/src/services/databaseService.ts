import mongoose from "mongoose";
import { DB_URL } from "../config/config";

// Definindo um modelo de café para buscar os dados do MongoDB
export const coffeeSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

const CoffeeModel = mongoose.model("Coffee", coffeeSchema);

class DatabaseService {
    private static instance: DatabaseService;
    private connection: typeof mongoose | null = null;

    private constructor() {}

    static getInstance(): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }

    async connectDB(): Promise<typeof mongoose> {
        if (this.connection) {
            console.log("Using existing database connection");
            return this.connection;
        }

        try {
            this.connection = await mongoose.connect(DB_URL);
            console.log("Connected to DB");
            return this.connection;
        } catch (error) {
            console.error("Error connecting to DB: ", error);
            throw error;
        }
    }

    // Método genérico para buscar café por nome
    private async getCoffeeByName(name: string) {
        await this.connectDB(); // Garante que estamos conectados antes da consulta
        const coffee = await CoffeeModel.findOne({ name });

        if (!coffee || typeof coffee.price !== "number" || typeof coffee.description !== "string") {
            throw new Error(`Invalid coffee data for ${name}`);
        }
        return { price: coffee.price, description: coffee.description };
    }

    async getCoffeeData() {
        return this.getCoffeeByName("basic_coffee");
    }

    async getCoffeeWithMilkData() {
        return this.getCoffeeByName("milk");
    }

    async getCoffeeWithSugarData() {
        return this.getCoffeeByName("sugar");
    }

    async getCoffeeWithCinnamonData() {
        return this.getCoffeeByName("cinnamon");
    }
}

export const databaseService = DatabaseService.getInstance();
