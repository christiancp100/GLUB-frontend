import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Button, Icon} from "@ui-kitten/components";
import {width} from "../constants/Layout";
import {purple, red} from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";

interface IconProps {
}

const PlusIcon = (props: IconProps) => (
    <Icon
        fill="white"
        animation="shake"
        style={styles.icon}
        {...props}
        name="plus-outline"
    />
);

export default function GoToTrend() {
    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate("Trend")} style={styles.button}>
            <PlusIcon/>
            <Text style={styles.text}>Ver más eventos y clubs</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex:1,
        flexDirection: "row",
        maxHeight: "35%",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 5,
        width: width * 0.7,
        borderColor: purple,
        marginTop: 6,
        backgroundColor: red,
        shadowOffset: {width: 5, height: 5},
        shadowColor: "black",
        shadowOpacity: 0.64,
        borderWidth: 0,
    },

    icon: {
        width: 25,
        height: 25,
        marginRight: "5%"
    },
    text:{
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    }
});
