import React from "react";
import { StyleSheet, Text, Animated } from "react-native";
import { Input, Icon } from "@ui-kitten/components";
import { width } from "../constants/Layout";
import { purple, red } from "../constants/Colors";
import { HeaderTitle } from "@react-navigation/stack";

interface IconProps {}
const DownArrow = (props: IconProps) => (
    <Icon
        fill={red}
        style={styles.icon}
        {...props}
        name="arrow-ios-downward-outline"
        onPress={() => alert("Se sugieren sitios")}
    />
);
interface MainLocationPrickerProps {
}
export default function MainLocationPicker({
}: MainLocationPrickerProps) {
    const [value, setValue] = React.useState("¿Por dónde sales?");

    return (
        <Input
            placeholder="¿Por dónde sales?"
            needsOffscreenAlphaCompositing
            style={[styles.input]}
            value={value}
            onChangeText={(nextValue) => setValue(nextValue)}
            accessoryRight={(props) => <DownArrow {...props} />}
            textStyle={styles.textStyle}
            onFocus={() => setValue("")}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 40,
        width: width * 0.53,
        borderColor: purple,
    },
    icon: {
        width: 16,
        height: 16,
        margin: 0,
        padding: 0,
    },
    textStyle: {
        color: purple,
    },
});
