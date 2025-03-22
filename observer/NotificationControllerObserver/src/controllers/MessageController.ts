import axios from "axios";
import { MessageFactory } from "../services/messageFactory";
import { routesURL } from "../configs/config";

class MessageController {
    private static baseURL : string = routesURL.baseURL;  
    private static postURL : string = routesURL.postRoute;
    private static getURL : string = routesURL.getRoute;

    public static async SendNotificationMessage(
        remetente : string,
        destinatario : string,
        content : string
    ) : Promise<void> {
        const url = `${this.baseURL}${this.postURL}`;
        const message = MessageFactory.BuildMessage(content, remetente, destinatario)

        try {
            await axios.post(url, message);
            console.log("Mensagem eviada:", message);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    }

    public static async ReceiveNotification(remetente : string) : Promise<void> {
        const url = `${this.baseURL}${this.getURL}${remetente}`;

        try {
            const response = await axios.get(url);
            console.log("mensagem recebida:", response.data);
        } catch (error) {
            console.error("Erro ao receber mensagem:", error);
        }
    }
}

