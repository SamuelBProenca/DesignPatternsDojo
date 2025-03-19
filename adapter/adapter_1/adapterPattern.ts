/*
## Cenário:
Você tem duas classes: uma delas ( OldPrinter ) imprime mensagens em maiúsculas,
enquanto a outra ( ClientPrinter ) espera imprimir mensagens sem alteração. O problema é
que você não pode modificar a classe OldPrinter , mas precisa integrá-la ao seu sistema.

## Código Inicial:

// Classe existente que você não pode alterar
class OldPrinter {
    printUpper(message: string): void {
    console.log(message.toUpperCase());
}
}
// Seu sistema espera usar isso:
interface Printer {
    print(message: string): void;
}
// Refatore utilizando o Adapter para integrar OldPrinter à interface Printer.

##Objetivo
1. Crie uma classe PrinterAdapter que implemente a interface Printer .
2. Use PrinterAdapter para adaptar o comportamento de OldPrinter .

*/

class OldPrinter {
    printUpper(message: string): void {
        console.log(message.toUpperCase());
    }
};

// Seu sistema espera usar isso:
interface Printer {
    print(message: string): void;
};


// Refatore uti lizando o Adapter para integrar OldPrinter à interface Printer.
class PrinterAdapter implements Printer {
    private oldPrinter: OldPrinter;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print(message: string) {
        const formatedMessage = message.toLowerCase();
        this.oldPrinter.printUpper(formatedMessage);
    }
}

const oldPrinter = new OldPrinter()
const printerAdapter = new PrinterAdapter(oldPrinter)

printerAdapter.print("Olá mundo")

