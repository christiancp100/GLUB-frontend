import React from "react";
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View,} from "react-native";
import {backgroundColor, red} from "../constants/Colors";
import {width} from "../constants/Layout";
import EntradaInfo from "./EntradaInfo";
import {tickets} from '../api/ticketData';



interface Props {
    setSelectedTicket :  React.Dispatch<React.SetStateAction<null>>
}


export default ({setSelectedTicket}: Props) => {
    const id = 1; // TODO put the id of the real ticket

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <EntradaInfo event={tickets[0]} />
            </View>
            <TouchableOpacity onPress={() => setSelectedTicket(id)} activeOpacity={0.5} style={styles.qrContainer}>
                <Image source={require("../assets/images/qr.png")} style={styles.qrCode}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        flex: 1,
        flexDirection: "row",
        backgroundColor,
        alignItems: "center",
        alignSelf: "center",
        width: width * 0.95
    },
    infoContainer: {
        width: "70%"
    },
    qrContainer: {
        flex: 1,
        backgroundColor: "white",
        marginLeft: "1%",
        borderRadius: 12,
        padding: "2%",
    },
    qrCode: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },

})
