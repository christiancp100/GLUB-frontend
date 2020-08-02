import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, Animated, Easing} from "react-native";
import {width, height} from "../constants/Layout";
import {red} from "../constants/Colors";
import {Icon, Button} from "@ui-kitten/components";

interface Props {
    place: {
        name: string;
        rating: number;
        distance: number;
        images: Array<any>;
    };
}

const Card = ({place}: Props) => {
    const [fullSize, setFullSize] = useState(false);
    let scaleValue = new Animated.Value(height * 0.35);

    useEffect(( ) => {
        scaleValue.setValue(fullSize ? height * 0.6 : height * 0.35 );
    }, [fullSize])

    return (
        <Animated.View style={[
            styles.cardContainer,
            {width},
            {height: scaleValue} // fullSize ? height * 0.6 : height * 0.35
        ]}>
            <View style={styles.redTop}/>
            <View style={styles.headerContainer}>
                <View style={{flex: 2, flexDirection: "row"}}>
                    <Text style={styles.placeName}>{place.name}</Text>
                    <Icon
                        style={styles.verified}
                        fill={"#57A4FC"}
                        name="checkmark-circle-outline"
                    />
                    <Text style={styles.placeRating}>{place.rating}</Text>
                    <Icon style={styles.star} fill={"#D8B400"} name="star"/>
                </View>
                <Text style={styles.placeDistance}>
                    {place.distance} minutos caminando
                </Text>
                {fullSize ?
                    (
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem cum, ea,
                                expedita
                                explicabo facilis in laboriosam molestiae nesciunt possimus quam quisquam quo sed sequi
                                soluta
                                suscipit totam voluptatem.
                            </Text>
                        </View>)
                    :
                    null}
                {/*<View style={styles.iconContainer}>
                    <Icon
                        fill={"white"}
                        style={styles.arrow}
                        name="arrow-ios-upward-outline"
                    />
                </View>*/}
            </View>

            <View style={[styles.bottomContainer, fullSize ? {bottom: "25%"} : {}]}>
                <View style={styles.imagesContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/header_background.jpg")}
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/party_example_1.jpg")}
                    />
                </View>
                <Button style={styles.verMas}
                        onPress={() => {
                            setFullSize(prevSize => !prevSize);
                        }}
                >
                    {fullSize ? "Ver menos" : "Ver más"}
                </Button>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        position: "absolute",
        flex: 1,
        top: 0,
        left: "150%",
        justifyContent: "flex-end",
    },
    arrow: {
        padding: 20,
        marginRight: 50,
    },
    descriptionContainer: {
        width: width * 0.9,
        marginVertical: "20%"
    },
    description: {
        color: "white",
        fontSize: 20
    },
    headerContainer: {
        position: "absolute",
        flex: 1,
        flexDirection: "column",
        top: "10%",
        left: "5%",
        margin: 0,
        width: "50%",
    },
    verMas: {
        backgroundColor: red,
        color: "white",
        marginLeft: "10%",
        borderWidth: 0,
    },
    placeName: {
        color: "white",
        fontSize: 30,
        marginRight: 5,
        marginBottom: 10,
    },
    placeRating: {
        color: "white",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10,
    },
    verified: {
        color: "white",
        fontSize: 30,
        margin: 0,
        padding: 10,
        marginRight: 10,
    },
    star: {
        color: "white",
        fontSize: 30,
        margin: 0,
        padding: 10,
        marginRight: 0,
    },
    placeDistance: {
        color: "grey",
    },
    cardContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        position: "absolute",
        backgroundColor: "black",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    redTop: {
        backgroundColor: red,
        position: "absolute",
        width: "100%",
        height: "4%",
        top: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    imagesContainer: {
        flex: 2,
        flexDirection: "row",
        maxWidth: "55%",
        marginLeft: "5%",
        height: 50,
        overflow: "hidden",
        borderRadius: 10,
    },
    image: {
        flex: 1,
        height: "auto",
        marginHorizontal: 2,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        width: "100%",
    },
});

export default Card;
