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

export default function Clubs() {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.text}>Clubs here</Text>
        </View>
    );
}
