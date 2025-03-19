info :{
    escopo : {
        // ### **2. Exercício: Sistema de Notificações (Observer)**
        // #### Cenário:
        // Uma aplicação precisa notificar diferentes módulos quando um novo evento ocorre. 
        // Por exemplo:
        // - Quando um usuário envia uma mensagem, um módulo exibe a mensagem no chat.
        // - Outro módulo armazena a mensagem no banco de dados.
        
        // Você deve implementar um sistema de notificações onde os módulos possam 
        // "se inscrever" para receber atualizações e reagir aos eventos.
    }
    tasks : {
        // #### Tarefas:
        // 
        // 1. Implemente um **Observer** chamado `EventManager` que:
        //    - Permita que módulos ("observadores") se inscrevam usando 
        // `subscribe(observer: Observer)`.
        //    - Notifique todos os módulos inscritos ao disparar um evento com 
        // `notify(data: any)`.
        // 
        // 2. Crie dois módulos:
        //    - `ChatModule`: Exibe a mensagem no console.
        //    - `DatabaseModule`: Salva a mensagem simulando um banco de dados.
        // 
        // 3. Simule o envio de mensagens e notifique os módulos inscritos.
    }
}
challenge : {

    interface Observer {
        update(data : string) : void;
    }

    class  ChatModule implements Observer{
        update(data : string) : void{
            console.log(`mensagem recebida no chat : ${data}`)
        }
    }
    
    class DatabaseModule implements Observer{
        update(data : string) : void{
                console.log(`Mensagem salva com sucesso!`);
        }
    }

    class EventManager {
        private observers : Observer[] = [];
        
        subscribe(observer : Observer) : void{
            this.observers.push(observer);
        }
        notify(data : string) : void{
            this.observers.forEach(observer => observer.update(data))
        }

    }
    
}