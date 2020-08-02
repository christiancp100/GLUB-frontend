import React, {useState} from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import {backgroundColor, red} from "../../constants/Colors";
import {height, width} from "../../constants/Layout";
import EntradaComprada from "../../components/EntradaComprada";
import {Icon} from "@ui-kitten/components";
import {EvilIcons} from "@expo/vector-icons";
import GoToTrend from "../../components/GoToTrend";

const FULL_SIZE_TICKET_HEIGHT = height * 0.60;

const Entradas = () => {

    const [selectedTicket, setSelectedTicket] = useState(null);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.entradasContainer}>
                <Text style={styles.date}>
                    Viernes 28 de Agosto
                </Text>
                <EntradaComprada {...{setSelectedTicket}} />
                <View style={{alignSelf: "center", marginTop: "20%"}}>
                    <GoToTrend/>
                </View>
            </ScrollView>
            {
                selectedTicket ? (
                    <View style={[styles.qrCodeFullSizeShown]}>
                        <Image style={styles.logo} source={require("../../assets/images/logo-no-shadow.jpg")}/>
                        <Image style={styles.qrCode} source={require("../../assets/images/qr.png")}/>
                        <EvilIcons onPress={() => setSelectedTicket(null)} size={45} style={styles.closeIcon}
                                   name="close" color={red}/>
                        <Text style={styles.eventName}>H20 PARTY - AMURA</Text>
                    </View>
                ) : null
            }
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


export default Entradas;
