import * as React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function InicioSesion() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/header_background.jpg")}
                style={styles.image}
            >
                <Text style={styles.title}>Inside</Text>
            </ImageBackground>
            <Text style={styles.title}>Inicio de sesion</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});
