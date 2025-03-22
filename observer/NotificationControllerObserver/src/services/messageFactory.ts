import { Message } from "../interfaces/interfaces";

export class MessageFactory {
    public static BuildMessage(
        messageContent : string,
        remetente : string,
        destinatario : string
    ) : Message {
        return {
            message : messageContent,
            time_date : new Date(),
            message_id : crypto.randomUUID(),
            remetente,
            destinatario
        };
    }
}

