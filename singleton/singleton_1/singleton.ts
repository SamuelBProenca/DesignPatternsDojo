/*
## 3. Exercício: Singleton
Cenário:
Você tem um sistema que precisa de uma configuração global para acesso ao banco de
dados. O problema é que múltiplas instâncias dessa classe de configuração podem causar
inconsistências. Você deve garantir que existe apenas uma única instância.
Código Inicial:

// Classe inicial de configuração
class DatabaseConfig {
    public host: string = "localhost";
    public port: number = 5432;
    constructor() {
        console.log("Nova instância de DatabaseConfig criada!");
}
}
// Refatore utilizando o padrão Singleton para garantir que apenas uma
instância seja criada.

## Objetivo
1. Transforme DatabaseConfig em um Singleton, com um método estático getInstance() .
2. Teste garantindo que getInstance() retorna sempre a mesma instância.


*/

class DatabaseConfig {

    private static instance: DatabaseConfig;

    private settings: Record<
        string, string | number
    > = {};

    private constructor() {
        console.log("Nova instância de DatabaseConfig criada!");
    }

    static getInstance(): DatabaseConfig {
        if (!DatabaseConfig.instance) {
            return DatabaseConfig.instance = new DatabaseConfig();
        }

        return DatabaseConfig.instance
    }

    set(key: string, value: string | number): void {
        this.settings[key] = value;
    }

    get(key: string): string | number {
        return this.settings[key];
    }
}

//Uso
const databaseConfigOne = DatabaseConfig.getInstance();
databaseConfigOne.set("host", "localhost")

const databaseConfigTwo = DatabaseConfig.getInstance();
databaseConfigTwo.set("port", 1578)

databaseConfigOne.get("host")
databaseConfigTwo.get("port")