import ApiCaller from "./ApiCaller";
import {events} from "./eventsData";


export const requestSingleEvent =  (id : number) => {
    return events.find(event => event.id === id);
}

export const requestAllEvents = async (page= 1) => {
    return await events;
}