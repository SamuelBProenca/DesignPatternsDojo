export type Message = {
    message : string,
    time_date : Date,
    message_id : string,
    remetente : string,
    destinatario : string
}

export interface WeatherDisplay {
    alert() : Message;
}

export interface SmsAlert {
    alertSms() : Message;
}

