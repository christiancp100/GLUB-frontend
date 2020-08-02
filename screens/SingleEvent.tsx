import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ImageBackground} from "react-native";
import {backgroundColor, purple, red} from "../constants/Colors";
import {HeaderBackButton} from "@react-navigation/stack";
import OnSaleTicketCard from "../components/OnSaleTicketCard";

import {requestSingleEvent} from "../api/RequestEvents";

interface Props {
    route: any;
}

const SingleEvent = ({route, navigation}: Props) => {
    const {id} = route.params;
    const [event, setEvent] = useState({})
    useEffect( () => {
        const getEventInfo  = () => {
            return requestSingleEvent(id);
        }

        // @ts-ignore
        setEvent(getEventInfo());

    }, []);

    return (
        <SafeAreaView style={styles.container}>
           <ImageBackground style={styles.topImage}  source={require("../assets/images/pelicano.jpg")}>
               <View style={styles.opacityLayer}/>
               <HeaderBackButton allowFontScaling={true} style={styles.arrowBack} onPress={() => navigation.goBack()}
                                 tintColor="white" labelVisible={false}/>
               <Text style={styles.headerText}>{event.organizer}</Text>
           </ImageBackground>
            <View style={styles.infoContainer}>
                <Text style={styles.eventName}>{event.name}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.ticketsContainer}>
                    {
                        event.tickets && event.tickets.map((ticket, i) => (
                            <OnSaleTicketCard key={i} {...ticket}/>
                        ))
                    }

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionHeader}>Descripción del Evento</Text>
                        <Text style={styles.eventDescription}>
                            {event.description}
                        </Text>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.infoImageContainer}>
                        {event.images && event.images.map((image, i) => (
                            <Image key={i} style={styles.infoImage} source={image}/>
                        ))}

                    </ScrollView>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: red
    },
    topImage: {
        flex: 1,
        resizeMode: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "60%",
    },
    opacityLayer: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "60%",
        opacity: 0.3,
        backgroundColor: purple
    },
    headerText: {
        textTransform: "uppercase",
        marginTop: "20%",
        fontSize: 60,
        textAlign: "center",
        fontWeight: "700",
        color: "white",
        textShadowColor: "black",
        textShadowOffset: {
            height: 3,
            width: 4
        }

    },
    arrowBack: {
        position: "absolute",
        top: "10%",
        left: "5%",
    },
    infoContainer: {
        backgroundColor,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "80%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingBottom: "25%"
    },
    eventName: {
        marginTop: "10%",
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },

    ticketsContainer: {
        marginTop: "5%",
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: "90%",
    },
    descriptionHeader: {
        fontSize: 20,
        marginTop: "5%",
        fontWeight: "bold",
        textTransform: "capitalize",
        color: "white",
        textAlign: "left",
    },
    eventDescription: {
        marginTop: "5%",
        color: "white",
        textAlign: "left",
        fontSize: 15
    },
    infoImage: {
        borderRadius: 12,
        width: 200,
        height: 100,
        marginHorizontal: 5,
    },
    infoImageContainer: {
        width: "90%",
        marginTop: "10%",
        flex: 1,
        alignContent: "flex-start",
        marginLeft: "5%",
    }
})


export default SingleEvent;