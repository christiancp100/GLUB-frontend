import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { backgroundColor } from "../../constants/Colors";

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor,
    },
    text: {
        color: "white",
    },
});

export default function Eventos() {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>Events here</Text>
        </View>
    );
}
