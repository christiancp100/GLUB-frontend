import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Animated,
} from "react-native";
import Colors from "../../constants/Colors";
import { width, height } from "../../constants/Layout";

import MainLocationPicker from "../MainLocationPicker";
import LookAround from "../LookAround";

interface Props {
}

export default function MainHeader({ }: Props) {
    return (
        <View style={styles.header}>
            <View>
                <ImageBackground
                    style={styles.headerImage}
                    source={require("../../assets/images/header_background.jpg")}
                >
                    <View style={styles.headerContent}>
                        <View style={styles.overlay} />
                        <Image
                            source={require("../../assets/images/logo-header.png")}
                            style={styles.logo}
                        />
                        <MainLocationPicker />
                        <LookAround />
                    </View>

                </ImageBackground>
            </View>


        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        position: "relative",
    },
    headerContent: {
        position: "relative",
        flex: 1,
        marginBottom: "5%",
        justifyContent: "flex-end",
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        position: "absolute",
        top: 0
    },
    headerImage: {
        height: height * 0.32,
        width,
    },
    overlay: {
        height: height * 0.32,
        width,
        backgroundColor: "rgba(56, 0, 99, 0.25)",
        position: "absolute",
    },
});
