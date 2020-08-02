import React from "react";
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View,} from "react-native";
import {backgroundColor, red} from "../constants/Colors";
import {width} from "../constants/Layout";
import EntradaInfo from "./EntradaInfo";
import {tickets} from '../api/ticketData';
import {EvilIcons, Feather, FontAwesome} from "@expo/vector-icons";
import {Icon} from "@ui-kitten/components";


interface Props {

}

export default ({}: Props) => {
    const id = 1; // TODO put the id of the real ticket

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <EntradaInfo event={tickets[1]}/>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.edit, styles.button]}>
                    <Feather style={styles.icon} size={40} fill="white" name="edit"/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.delete, styles.button]}>
                    <Feather size={40} style={styles.icon} fill="white"
                             name="trash-2"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        flex: 1,
        flexDirection: "row",
        backgroundColor,
        alignItems: "center",
        alignSelf: "center",
        width: width * 0.95
    },
    infoContainer: {
      minWidth: "75%"
    },
    buttonsContainer: {
        flex: 1,
    },
    button: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        width: "80%",
        backgroundColor: red,
        borderRadius: 15,
        flexGrow: 1
    },
    edit: {},
    delete: {
        marginTop: 3,
    },
    icon: {
        alignSelf: "center",
        justifyContent: "center",
        color: "white"
    }
})
