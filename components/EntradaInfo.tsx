import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {IconSelector} from "./IconSelector";
import {red} from "../constants/Colors";

const CARD_HEIGHT = 140;

interface Props {
    event: {
        name: string,
        organizer: string,
        ticket: {
            type: string,
            quantity: number,
            drinks: Array<{ type: string, quantity: number }>;
        };
    };
}

export default ({event} : Props) => {
    const {name, organizer, ticket} = event;

    return (<View style={styles.infoContainer}>
        <Text style={styles.eventName}>{name} - {organizer}</Text>
        <Text style={styles.ticketType}><Text style={styles.ticketTypeQuantity}>
            {ticket.quantity} x </Text>
            {ticket.type}</Text>
        <View style={styles.drinksContainer}>
            {
                ticket.drinks.map(({quantity, type}, i) => (
                    <View key={i} style={styles.drink}>
                        <Text style={styles.drinkText}>
                            {quantity} x <IconSelector size={15} color="white" drink={type}/>
                        </Text>
                    </View>
                ))
            }

        </View>
    </View>)
}

const styles = StyleSheet.create({

    infoContainer: {
        flex: 1,
        padding: "1%",
        backgroundColor: "white",
        borderRadius: 12,
    },
    eventName: {
        marginTop: "5%",
        marginLeft: "5%",
        fontSize: 23,
        fontWeight: "700",
    },
    ticketType: {
        marginTop: "5%",
        marginLeft: "5%",
        fontSize: 18,
        fontWeight: "600"
    },
    ticketTypeQuantity: {
        color: red,
        fontWeight: "700",
        fontSize: 20,

    },
    drinksContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        marginLeft: "5%",
        marginVertical: "5%"
    },
    drink: {
        padding: "2%",
        paddingHorizontal: "4%",
        backgroundColor: "black",
        marginRight: "5%",
        marginVertical: "1%"
    },
    drinkText: {
        fontSize: 20,
        color: "white"
    },
})