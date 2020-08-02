import React, {useState} from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import {backgroundColor, red} from "../../constants/Colors";
import {height, width} from "../../constants/Layout";
import EntradaComprada from "../../components/EntradaComprada";
import EntradaEnCarrito from "../../components/EntradaEnCarrito";
import GoToTrend from "../../components/GoToTrend";

const FULL_SIZE_TICKET_HEIGHT = height * 0.60;

const Carrito = () => {


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.entradasContainer}>
                <Text style={styles.date}>
                    Domingo 30 de Agosto
                </Text>
                <EntradaEnCarrito/>
                <View style={{alignSelf: "center", marginTop: "20%"}}>
                    <GoToTrend/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        backgroundColor,

    },
    entradasContainer: {
        backgroundColor,
        marginTop: "10%",
        marginBottom: "5%",
    },
    date: {
        fontSize: 18,
        color: "#BCBBBB",
        textAlign: "center"
    },
    closeIcon: {
        position: "absolute",
        right: "5%",
        top: "5%",
        color: "red"
    },
    logo: {
        position: "absolute",
        top: "-5%",
        flex: 1,
        alignSelf: "center",
        marginBottom: "10%",
    },
    qrCodeFullSizeNotShown: {
        display: "none"
    },

    qrCodeFullSizeShown: {
        alignSelf: "center",
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 12,
        height: FULL_SIZE_TICKET_HEIGHT,
        width: width * 0.95
    },
    qrCode: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
        marginTop: "5%",
    },
    eventName: {
        position: "absolute",
        textAlign: "center",
        fontWeight: "700",
        bottom: "5%",
        textTransform: "uppercase",
        alignSelf: "center",
        fontSize: 28,
    }
})


export default Carrito;
