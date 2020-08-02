import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from "@ui-kitten/components";
import {red} from "../constants/Colors";
import {width} from "../constants/Layout";
import {FontAwesome} from "@expo/vector-icons";
import IconSelectorWithNames from "./IconSelector";

const CARD_HEIGHT = 140;
const BUTTON_MARGIN = 3
const BUTTON_HEIGHT = (CARD_HEIGHT - BUTTON_MARGIN) / 2;



interface EntradaProps {
    premium?: boolean,
}

const EntradaTitle = ({premium} : EntradaProps) => {
    return (
        <Text style={styles.entradaType}>
            Entrada{" "}
            {
                premium ?
                    <Text style={styles.premium}>Premium</Text>
                    :
                    " Normal"}
        </Text>)
}

interface ReservadoProps {
    howManyPeople?: number,

}
const ReservadoTitle = ({howManyPeople} : ReservadoProps) => {
    return(
        <Text style={styles.entradaType}>
            Reservado para {howManyPeople} personas
        </Text>
    )
}

interface TicketProps {
    premium?: boolean,
    reservado?: boolean,
    howManyPeople?: number,
    price: number,
    drinks : Array<{type : string, quantity : number}>
}

const OnSaleTicketCard = ({price, drinks, premium, reservado, howManyPeople}: TicketProps) => {
    const {precioFirstPart, precioSecondPart} = dividePrice(price);

    return (
        <View style={styles.container}>
            <View style={[styles.infoContainer,  reservado ? {height: 200} : {} ]}>
                <Text style={styles.entradaType}>
                    {reservado ? <ReservadoTitle {...{howManyPeople}}/> : <EntradaTitle {...{premium}}/>}
                </Text>

                <Text style={styles.incluyeText}>Incluye: </Text>

                {drinks && drinks.map((drink, i) => (
                    <Text key={i} style={styles.bebidas}>
                        <IconSelectorWithNames {...{drink}}/>
                    </Text>
                ))}

                <View style={styles.priceContainer}>
                    <Text style={styles.priceFirstPart}>{precioFirstPart}</Text><Text style={styles.priceSecondPart}>,{precioSecondPart}</Text>
                    <Text style={styles.currencyText}>€</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.edit, styles.button]}>
                    <FontAwesome style={styles.icon} size={42} fill="white" name="tag"/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.delete, styles.button]}>
                    <Icon style={styles.icon} fill="white"
                          name="shopping-cart-outline"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const dividePrice = (price: number) => {
    let aux = price.toString().split(",");
    if(aux.length === 1){
        aux = price.toString().split(".");
    }
    if(aux.length >=1){
        return {
            precioFirstPart : aux[0],
            precioSecondPart : aux[1],
        }
    }else{
        return {
            precioFirstPart : 0,
            precioSecondPart : 0,
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        marginVertical: 10,
        width,
        justifyContent: "center",
    },
    infoContainer: {
        paddingHorizontal: "5%",
        position: "relative",
        width: "70%",
        backgroundColor: "white",
        height: CARD_HEIGHT,
        borderRadius: 15,
    },
    entradaType: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: "5%"
    },
    premium: {
        backgroundColor: "#BF9B30",
        color: "white",
    },
    incluyeText: {
        fontWeight: "200",
        fontSize: 15,
        marginTop: "2%",
        textTransform: "uppercase",
        marginBottom: "2%"
    },
    bebidas: {
        fontSize: 15,
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: "1%"
    },
    priceContainer: {
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        right: "8%",
        bottom: "0%"
    },
    priceFirstPart: {
        fontSize: 40,
        fontWeight: "900"
    },
    priceSecondPart: {
        fontSize: 18
    },
    currencyText: {
        marginTop: "10%",
        fontSize: 30,
        fontWeight: "400"
    },
    buttonsContainer: {
        marginLeft: "2%"
    },
    button: {
        alignSelf: "center",
        width: 65,
        backgroundColor: red,
        borderRadius: 15,
        height: BUTTON_HEIGHT
    },
    edit: {
        marginBottom: 3,
    },
    delete: {
        marginTop: 3,
    },
    icon: {
        alignSelf: "center",
        marginVertical: "15%",
        width: 40,
        height: 40,
        color: "white"
    }
});

export default OnSaleTicketCard;