### 1. Exercício: Decorator
**Cenário**: Você está desenvolvendo um sistema de pedidos para uma cafeteria. O cliente pode adicionar complementos ao pedido, como leite, açúcar, canela, etc. Cada complemento tem um custo adicional.

**Objetivo**:
1. Crie uma interface `Beverage` com um método `cost(): number` e uma descrição `getDescription(): string`.
2. Crie uma classe base chamada `Coffee` que implementa `Beverage`.
3. Implemente decoradores como `Milk`, `Sugar` e `Cinnamon` que adicionem custos e descrições ao pedido de café.
4. Use os decoradores para criar combinações dinâmicas de pedidos.

---

### 2. Exercício: Observer
**Cenário**: Você está criando um sistema de monitoramento meteorológico que atualiza diferentes dispositivos (displays, alertas por SMS, etc.) sempre que há uma mudança no clima.

**Objetivo**:
1. Implemente um `WeatherStation` que notifica os dispositivos inscritos.
2. Crie interfaces para os observadores (ex.: `WeatherDisplay`, `SmsAlert`) e implemente classes concretas que respondem às mudanças.
3. Simule alterações climáticas e observe as atualizações nos dispositivos.

---

### 3. Exercício: Strategy
**Cenário**: Você está desenvolvendo um jogo de RPG em que os personagens podem ter diferentes comportamentos de ataque (ex.: espada, magia, arco e flecha).

**Objetivo**:
1. Crie uma interface `AttackStrategy` com um método `attack()`.
2. Implemente diferentes estratégias como `SwordAttack`, `MagicAttack`, e `ArrowAttack`.
3. Permita que os personagens mudem de estratégia dinamicamente durante o jogo.

---

### 4. Exercício: Builder
**Cenário**: Você está projetando uma ferramenta para criar relatórios. Cada relatório pode ter um cabeçalho, um corpo e um rodapé opcionais.

**Objetivo**:
1. Implemente um `ReportBuilder` para construir relatórios de forma flexível.
2. Crie diferentes tipos de relatórios (ex.: relatório resumido e relatório detalhado) utilizando o builder.
3. Adicione um método `reset()` para limpar o estado do builder após a construção do relatório.

---

### 5. Exercício: Proxy
**Cenário**: Você está desenvolvendo um sistema para acesso remoto a arquivos. Para melhorar a segurança, você decide implementar um proxy que valide as permissões antes de permitir o acesso.

**Objetivo**:
1. Crie uma interface `FileAccess` com um método `readFile(fileName: string): string`.
2. Implemente uma classe `RealFileAccess` que lê o arquivo.
3. Crie um `SecurityProxy` que verifica as permissões do usuário antes de acessar o arquivo.
4. Simule tentativas de acesso com diferentes níveis de permissão.

---

### 6. Exercício: Command
**Cenário**: Você está desenvolvendo um sistema de automação para uma casa inteligente. Diferentes dispositivos (ex.: luzes, portas, termostato) podem ser controlados remotamente.

**Objetivo**:
1. Crie uma interface `Command` com um método `execute()`.
2. Implemente classes de comando para controlar dispositivos, como `TurnOnLight`, `OpenDoor`, e `SetTemperature`.
3. Implemente um `RemoteControl` que gerencie e execute os comandos.

---

### 7. Exercício: Composite
**Cenário**: Você está criando um sistema para representar um diretório de arquivos. Cada diretório pode conter subdiretórios ou arquivos.

**Objetivo**:
1. Crie uma interface `FileSystemItem` com métodos como `getName()` e `getSize()`.
2. Implemente as classes `File` e `Directory`, onde `Directory` pode conter outros `FileSystemItem`s.
3. Teste o sistema criando uma estrutura hierárquica e calculando o tamanho total de um diretório.

---

### 8. Exercício: Mediator
**Cenário**: Em um sistema de chat, cada usuário pode enviar mensagens para outro usuário sem se comunicar diretamente.

**Objetivo**:
1. Implemente um `ChatMediator` que gerencie as mensagens entre os usuários.
2. Crie uma interface `User` com métodos para enviar e receber mensagens.
3. Implemente classes de usuário que se comunicam por meio do `ChatMediator`.

---


___


### 1. Exercício: Chain of Responsibility
**Cenário**: Você está desenvolvendo um sistema de validação de formulários em que cada campo deve ser validado em uma sequência definida. Por exemplo: campo de e-mail, senha e CPF.

**Objetivo**:
1. Implemente o padrão **Chain of Responsibility** para validar os campos de um formulário.
2. Cada validador deve verificar uma condição específica e passar para o próximo.
3. Teste cenários com formulários válidos e inválidos.

---

### 2. Exercício: Flyweight
**Cenário**: Você está criando um editor de texto que precisa manipular milhares de caracteres. Para economizar memória, caracteres que compartilham as mesmas propriedades (como fonte e tamanho) devem usar o mesmo objeto.

**Objetivo**:
1. Implemente o padrão **Flyweight** para representar caracteres no editor.
2. Utilize um objeto compartilhado para propriedades comuns (ex.: fonte, estilo, tamanho).
3. Adicione funcionalidades para exibir e alterar caracteres.

---

### 3. Exercício: Visitor
**Cenário**: Você tem uma estrutura de diretórios que pode conter arquivos e subdiretórios. Precisa implementar relatórios diferentes, como listar os arquivos ou calcular o tamanho total.

**Objetivo**:
1. Implemente o padrão **Visitor** para realizar operações em diretórios e arquivos.
2. Crie visitantes que gerem relatórios diferentes, como tamanho total ou lista de arquivos.

---

### 4. Exercício: State
**Cenário**: Você está criando uma máquina de venda automática. Ela possui estados como "Aguardando Moeda", "Produto Selecionado" e "Dispensando Produto".

**Objetivo**:
1. Implemente o padrão **State** para gerenciar os diferentes estados da máquina.
2. Cada estado deve ter comportamentos diferentes ao receber entradas, como moedas ou seleção de produtos.
3. Teste transições de estado e comportamentos.

---

### 5. Exercício: Template Method
**Cenário**: Você está desenvolvendo um jogo de cartas onde diferentes tipos de jogos (ex.: poker, buraco) têm algumas regras em comum, mas outras específicas.

**Objetivo**:
1. Implemente o padrão **Template Method** para criar uma classe base com regras comuns.
2. Herde para criar classes específicas com as regras específicas de cada jogo.
3. Simule diferentes jogos utilizando o padrão.

---

### 6. Exercício: Bridge
**Cenário**: Você está criando um sistema de notificações que pode ser enviado por diferentes meios (ex.: e-mail, SMS) e para diferentes tipos de mensagens (ex.: alertas, promoções).

**Objetivo**:
1. Utilize o padrão **Bridge** para desacoplar o tipo de mensagem do meio de envio.
2. Adicione implementações para e-mails e SMSs, e crie diferentes tipos de mensagens.
3. Teste combinando tipos de mensagens e meios de envio.

---

### 7. Exercício: Prototype
**Cenário**: Você está desenvolvendo um sistema para clonar objetos complexos que são caros de criar, como documentos ou gráficos.

**Objetivo**:
1. Implemente o padrão **Prototype** para copiar objetos com diferentes configurações.
2. Adicione métodos para clonar e modificar os objetos.
3. Teste a clonagem de diferentes objetos para verificar a eficiência.

---

### 8. Exercício: Memento
**Cenário**: Você está criando um editor de texto que precisa permitir ao usuário desfazer alterações.

**Objetivo**:
1. Implemente o padrão **Memento** para armazenar o estado atual do texto.
2. Crie funcionalidades para salvar e restaurar estados.
3. Teste cenários de edição com múltiplos desfazeres.

---
