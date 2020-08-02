import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import {width} from "../constants/Layout";
import {months} from "../constants/TimeStuff";
import {cardText} from "../constants/Colors";
import {MaterialIcons, AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

interface Props {
    event: {
        id: number,
        name: string,
        organizer: string,
        date: Date,
        place: string,
        images: Array<string> // TODO cambiar para no traer todas las imagenes
    }
}

export default function EventCard({
                                      id,
                                      name,
                                      organizer,
                                      date,
                                      place,
                                      images
                                  }: Props) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container}
                          onPress={() => navigation.navigate("SingleEvent", {id, name})}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    backgroundColor: "#eee",
                    borderRadius: 10,
                    overflow: "hidden",
                }}
            >
                <View style={{width: "65%"}}>
                    <Text style={styles.title}>
                        {name} - {organizer}
                    </Text>
                    <Text style={styles.text}>
                        <AntDesign name="calendar" size={15} color={cardText}/>{" "}
                        {date && date.getDate()} de {date && months[date.getMonth()]}
                    </Text>
                    <Text style={styles.text}>
                        <MaterialIcons name="place" size={15} color="black"/>{" "}
                        {place}
                    </Text>
                </View>
                {images ? (
                    <Image
                        style={{width: "35%", height: "100%"}}
                        source={images[0]}
                    />
                ) : null}

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "white",
        height: 120,
        width: width * 0.96,
        borderRadius: 10,
        marginVertical: 8,
    },
    title: {
        padding: 5,
        fontSize: 20,
        color: cardText,
        marginBottom: 10,
        fontWeight: "700",
        marginLeft: 10,
    },
    text: {
        paddingLeft: 5,
        fontSize: 15,
        color: cardText,
        marginVertical: 3,
        marginLeft: 10,
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        height: 100,
        position: "absolute",
        overflow: "hidden",
        top: 0,
        bottom: 0,
    },
});
