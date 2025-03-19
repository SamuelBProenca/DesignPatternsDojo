/*
5. Exercício: Factory
Cenário:
Você está desenvolvendo um sistema de pagamento que precisa criar diferentes tipos de
métodos de pagamento, como:

Cartão de Crédito ( CreditCard )
PayPal
Pix

Cada método de pagamento tem uma lógica de validação única e realiza uma ação de
pagamento.


Instrução:

1. Crie uma interface PaymentMethod :
interface PaymentMethod {
    validate(): boolean;
    pay(amount: number): void;
}

2. Implemente as classes CreditCard , PayPal e Pix com a lógica específica para cada
um.
3. Crie uma PaymentFactory com o método:
static createPaymentMethod(type: string): PaymentMethod


*/

interface PaymentMethod {
    validate(): boolean;
    pay(amount: number): void
}

class CreditCard implements PaymentMethod {
    private creditCardNumber: string;

    constructor(creditCardNumber: string) {
        this.creditCardNumber = creditCardNumber;
    }

    validate(): boolean {
        if (!this.creditCardNumber || this.creditCardNumber.length !== 16) {
            console.error("Número do cartão inválido!");
            return false
        }
        return true
    }

    pay(amount: number): void {
        if (this.validate()) {
            console.log(`Produto pago com sucesso atravéz do Cartão de Crédito! o valor foi de R$${amount}`)
        }
        else {
            console.log(`Pagamento Falhou, verifique os dados do cartão`)
        }
    }
}


class PayPal implements PaymentMethod {
    private paymentCode: string;

    constructor(paymentCode: string) {
        this.paymentCode = paymentCode;
    }

    validate(): boolean {
        if (!this.paymentCode) {
            return false
        }
        return true
    }
    pay(amount: number): void {
        if (!this.validate()) {
            console.error("erro na validação do código, verifique o código e tente novamente");
        }
        console.log(`Produto pago com sucesso através do PayPal, o valor foi de R$${amount}`)
    }
}

class Pix implements PaymentMethod {
    private pixKey: string;

    constructor(pixKey: string) {
        this.pixKey = pixKey;
    }

    validate(): boolean {
        if (!this.pixKey || this.pixKey.length < 5) {
            return false
        }
        return true
    }
    pay(amount: number): void {
        if (!this.validate()) {
            console.error("chave pix inválida");
        }
        console.log(`Produto pago com sucesso através do pix, o valor foi de R$${amount}`)
    }
}

class PaymentFactory {
    static createPaymentMethod(type: string, value: string): PaymentMethod {
        if (type == "pix") {
            return new Pix(value)
        }
        else if (type == "Paypal") {
            return new PayPal(value)

        }
        else if (type == "CreditCard") {
            return new CreditCard(value)
        }
        else {
            throw new Error(`Método de pagamento não suportado`)
        }
    }
}

//USO
try {
    const creditCard = PaymentFactory.createPaymentMethod(
        "CreditCard",
        "1234567891011213"
    );
    creditCard.pay(1800);

    const pix = PaymentFactory.createPaymentMethod("Pix", "abc123");
    pix.pay(250);

    const paypal = PaymentFactory.createPaymentMethod("PayPal", "transfer123");
    paypal.pay(1500)
} catch (error) {
    console.error(error.message)
}