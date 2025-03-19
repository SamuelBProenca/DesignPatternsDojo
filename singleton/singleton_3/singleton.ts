first_singleton : {
    info : {
        // ### **1. Exercício: Sistema de Cache de Dados (Singleton)**
        // #### Cenário:
        // Você está desenvolvendo uma aplicação que precisa buscar dados de uma API externa 
        // frequentemente. Para otimizar o desempenho, você deve implementar um sistema de cache 
        // que armazene os dados localmente. Se o mesmo dado for solicitado novamente, ele deve 
        // ser retornado do cache, evitando chamadas desnecessárias à API.
        
        // #### Tarefas:
        // 1. Crie uma classe `CacheService` que implemente o padrão Singleton.
        // 2. `CacheService` deve:
        //    - Ter um método `get(key: string)` que verifica se o dado existe no cache.
        //    - Ter um método `set(key: string, value: any)` para armazenar novos dados no cache.
        // 3. Simule o uso do cache no código chamando a API fictícia:
        //    ```typescript
        //    function fetchFromAPI(endpoint: string): Promise<string> {
        //        console.log(`Buscando dados do endpoint: ${endpoint}`);
        //        return new Promise(resolve => {
        //            setTimeout(() => resolve(`Dados do endpoint ${endpoint}`), 1000);
        //        });
        //    }
        //    ```
    }
    // **Desafio**: Use o `CacheService` para evitar múltiplas chamadas ao mesmo endpoint.
    singleton_sistem : {
        tasks : {
            // [ X ] - Buscar dados de uma api 
            // [ X ] - Sistema de cache local
            // [ X ] - Dado solicitado igual - retornar do cache
        }

        class CacheService {
            // instancia unica da classe
            private static instance : CacheService;
            private cache: Record<string, any> = {};
            private constructor(){};
            // verificar se o dado existe no cache
            public static getInstance(){
                if(!CacheService.instance){
                    CacheService.instance = new CacheService();
                }
                return CacheService.instance;
            }
            
            public get(key: string) : any | undefined{
                // console.log(this.cache[key]);
                return this.cache[key];
            }

            // armazenar os dados no cache
            public set(key : string, value : any){
                this.cache[key] = value;
            }
        }

        function fetchFromAPI(endpoint: string): Promise<string> {
            console.log(`Buscando dados do endpoint: ${endpoint}`);
            return new Promise(resolve => {
                setTimeout(() => resolve(`Dados do endpoint ${endpoint}`), 1000);
            });
        }

        // para testar:
        teste : {
            (async () => {
                const cache = CacheService.getInstance();
              
                // Primeira chamada ao endpoint (não está no cache ainda)
                let result = cache.get("endpoint1");
                if (!result) {
                  result = await fetchFromAPI("endpoint1");
                  cache.set("endpoint1", result);
                }
                console.log(result); // Busca da API e armazena no cache
              
                // Segunda chamada ao mesmo endpoint (deve vir do cache)
                result = cache.get("endpoint1");
                console.log(result); // Retorna diretamente do cache
              
                // Nova chamada para outro endpoint
                let result2 = cache.get("endpoint2");
                if (!result2) {
                  result2 = await fetchFromAPI("endpoint2");
                  cache.set("endpoint2", result2);
                }
                console.log(result2); // Busca da API e armazena no cache
              })();
              
        }
    }
}