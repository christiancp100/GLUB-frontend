import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Icon } from "@ui-kitten/components";
import { width } from "../constants/Layout";
import { purple, red } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

interface IconProps {
}
const LocationIcon = (props: IconProps) => (
    <Icon
        fill="white"
        animation="shake"
        style={styles.icon}
        {...props}
        name="navigation-2"
    />
);

export default function LookAround() {
    const navigation = useNavigation();
    const [value, setValue] = React.useState("¿Por dónde sales?");

    return (
        <Button
            style={styles.button}
            size="small"
            accessoryLeft={(props) => <LocationIcon {...props} />}
            onPressOut={() => navigation.navigate("Buscar")}
        >
            Descubre lo que hay cerca
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        width: width * 0.7,
        height: 1,
        borderColor: purple,
        fontSize: 100,
        marginTop: 6,
        backgroundColor: "rgba(218, 20, 3, 0.95)",
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.64,
        borderWidth: 0,
    },

    icon: {
        width: 10,
        height: 10,
    },
});
