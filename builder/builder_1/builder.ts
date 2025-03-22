info : {
    // ### **4. Exercício: Configurações Globais (Builder)**
    // #### Cenário:
    // Você está desenvolvendo um sistema onde diferentes partes da aplicação precisam de 
    // configurações globais. Por exemplo:
    // - Uma seção da aplicação utiliza o idioma do usuário.
    // - Outra seção utiliza informações de autenticação.
    
    // Essas configurações podem variar dependendo do ambiente (desenvolvimento, produção).
}

tasks : {
    // #### Tarefas:
    // 1. Implemente o padrão **Builder** para criar uma classe `Config` que:
    //    - Possua métodos para definir o idioma (`setLanguage(language: string)`).
    //    - Possua métodos para configurar o token de autenticação (`setAuthToken(token: string)`).
    //    - Seja finalizada com `build()`, que retorna o objeto de configuração.
    // 2. Crie uma classe `ConfigBuilder` e use-a para configurar diferentes partes do sistema.
}

class Config implements setLanguageInterface, setAuthTokenInterface {
    public language : string;
    public token : string;

    setLanguage(language : string) {
        this.language = language;
        return this;
    }
    setAuthToken(token : string) {
        this.token = token;
        return this;
    }
}

interface setLanguageInterface{
    setLanguage(language : string) : this;
}

interface setAuthTokenInterface{
    setAuthToken(token : string) : this;
}

class ConfigBuilder {
    private config : Config = new Config();

    setLanguage(language : string){
        this.config.language = language;
        return this;
        
    }; 
    
    setAuthToken(token : string){
        this.config.token = token;
        return this;
    };
    
    public build(){
        return this.config;
    };

}