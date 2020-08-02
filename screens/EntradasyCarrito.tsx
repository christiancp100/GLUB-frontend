import * as React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import {backgroundColor} from "../constants/Colors";
import {height, width} from "../constants/Layout";
import {EntradasTabNavigator} from "../navigation/EntradasTabNavigator";
import {useState} from "react";

export default function Buscar() {
    const [screen, setScreen ] = useState("Carrito");

    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {screen}
                </Text>
            </View>
            <View style={styles.content}>
                <EntradasTabNavigator setScreen={setScreen}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor,
        alignItems: "center",
    },
    header: {
        justifyContent: "center",
        zIndex: 200,
        alignItems: "center",
        width,
        height: height * 0.1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.7,
        shadowRadius: 6.00,

        elevation: 30,


    },
    content: {
        flex: 1,
        justifyContent:"flex-start",
        marginTop: "5%",
        width,

    },
    headerText: {
        fontSize: 35,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
