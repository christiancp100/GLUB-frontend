import React, {useState} from "react";
import {View, StyleSheet, Animated} from "react-native";
import Colors, {backgroundColor} from "../constants/Colors";
import {width, height} from "../constants/Layout";
import MainHeader from "../components/layout/MainHeader";
import MainDatePicker from "../components/MainDatePicker";
import Calendar from "../components/Calendar";

//Tab Navigator
import {InicioTabNavigator} from "../navigation/InicioTabNavigator";

export default function Inicio() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <>
            <Calendar {...{showDatePicker}}/>
            {showDatePicker ?
                <View onTouchStart={() => setShowDatePicker(false)} style={styles.containerNotTouchable}/>
                :
                null
            }
            <View style={[styles.container]}>
                <View
                    needsOffscreenAlphaCompositing
                >
                    <View needsOffscreenAlphaCompositing>
                        <MainHeader/>
                    </View>
                    <View>
                        <MainDatePicker {...{setShowDatePicker}}/>
                    </View>
                </View>
                <InicioTabNavigator/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
    },
    containerNotTouchable: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        opacity: 0.7,
        backgroundColor,
        width,
        height
    }
});
