info: {
    // 3. Exercício: Singleton
    // Cenário:
    // Você está desenvolvendo uma aplicação que gerencia logs (mensagens de erro, informações, etc.).
    // Esses logs devem ser armazenados globalmente e 
    // acessíveis de qualquer lugar da aplicação.

    // Instrução:
    // Crie uma classe Logger que funcione como um Singleton.

    // O Logger deve ter métodos para:

    // Registrar logs:
    // Listar todos os logs registrados:
    // Implemente o padrão Singleton com:

    // Um método estático getInstance() para garantir que apenas uma instância seja usada.

    // Um array interno para armazenar os logs.

    // Teste: Registre alguns logs de diferentes partes do código e confirme que todos estão sendo armazenados em uma única instância do Logger.
}

class Logger {
    private static instance: Logger;
    private logs: string[] = [];
    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        const timestamp = new Date().toISOString();
        this.logs.push(`[${timestamp}] ${message}`);
        console.log(`Log registrado: ${message}`);
    }

    public getLogs(): string[] {
        return this.logs;
    }
}

Testando_o_Singleton: {
    // Obtém a instância do Logger
    const logger1 = Logger.getInstance();
    logger1.log("Primeiro log registrado.");
    logger1.log("Log de erro crítico!");

    // Obtém novamente a instância do Logger (mesma instância)
    const logger2 = Logger.getInstance();
    logger2.log("Log de teste registrado por outra parte do código.");

    // Verificando os logs
    console.log(logger1.getLogs());
    console.log(logger2.getLogs());

    // Confirmando que é a mesma instância
    console.log(logger1 === logger2); // Saída: true
}


