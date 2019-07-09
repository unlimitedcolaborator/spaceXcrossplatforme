export interface Links {
    reddit?: any;
    article: string;
    wikipedia: string;
}

export interface History {
    id: number;
    title: string;
    event_date_utc: Date;
    event_date_unix: number;
    flight_number: number;
    details: string;
    links: Links;
}
