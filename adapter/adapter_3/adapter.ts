
info: {
    // ### **5. Exercício: Autenticação de Usuários (Adapter)**
    // #### Cenário:
    // Você está desenvolvendo um sistema de autenticação que precisa integrar dois serviços diferentes:
    // - Um serviço legado retorna a autenticação no formato `{ user_id: string, token: string }`.
    // - O novo serviço retorna no formato `{ id: number, jwt: string }`.

    // Seu sistema precisa usar um formato único: `{ id: string, accessToken: string }`.
}

tasks: {
    // #### Tarefas:
    // 1. Crie interfaces para os dois serviços.
    // 2. Implemente dois **Adapters** para converter os dados de cada serviço para o formato esperado.
    // 3. Simule o uso do sistema de autenticação com os dois serviços.
}

interface OldService {
    user_id: string,
    token: string
}

interface NewService {
    id: number,
    jwt: string
}

interface UnifiedAuthFormat {
    id: string;
    accessToken: string;
}


class AdapterNewService {
    adapt(data: OldService): UnifiedAuthFormat {
        return {
            id: data.user_id,
            accessToken: data.jwt,
        };
    }
}

class AdapterOldService {
    adapt(data: NewService): UnifiedAuthFormat {
        return {
            id: data.id,
            accessToken: data.token,
        };
    }
}

test: {
    // Simulação dos dados do novo serviço
    const newServiceData: NewService = { id: 123, jwt: "new_jwt_token" };

    // Simulação dos dados do serviço legado
    const oldServiceData: OldService = { user_id: "user_456", token: "old_token" };

    // Instância dos Adapters
    const newServiceAdapter = new AdapterNewService();
    const oldServiceAdapter = new AdapterOldService();

    // Converte os dados usando os Adapters
    const unifiedFromNew = newServiceAdapter.adapt(newServiceData);
    const unifiedFromOld = oldServiceAdapter.adapt(oldServiceData);

    console.log("Autenticação no formato unificado (Novo Serviço):", unifiedFromNew);
    console.log("Autenticação no formato unificado (Serviço Legado):", unifiedFromOld);
}

