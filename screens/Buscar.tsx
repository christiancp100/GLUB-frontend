import React, {useState} from "react";
import * as Permissions from "expo-permissions";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {Input, Icon} from "@ui-kitten/components";
import Polyline from "@mapbox/polyline";
import axios from "axios";
import {Marker} from "react-native-maps";
import {width, height} from "../constants/Layout";
import {red, backgroundColor, purple} from "../constants/Colors";
import Card from "../components/SearchCard";
import MapView from "react-native-maps";
import {setStatusBarStyle} from "expo-status-bar";

const locations = require("./locations.json");


const MyMarker = () => (
    <View
        style={{
            width: 20,
            height: 20,
            backgroundColor: "#3497FD",
            borderRadius: 5,
        }}
    ></View>
);

interface PositionButtonInterface {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
    onPress: () => {};
}

const MyPosition = ({
                        latitude,
                        longitude,
                        latitudeDelta,
                        longitudeDelta,
                        onPress,
                    }: PositionButtonInterface) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.myPos}>
            <MaterialIcons
                fill={red}
                style={styles.myPosIcon}
                name="gps-fixed"
            />
        </TouchableOpacity>
    );
};

const Search = () => {
    const [value, setValue] = useState("");
    return (
        <Input
            placeholder="Busca eventos o clubs"
            needsOffscreenAlphaCompositing
            style={[styles.input]}
            value={value}
            size="large"
            onChangeText={(nextValue) => setValue(nextValue)}
            accessoryLeft={(props) => (
                <Icon
                    fill={red}
                    style={styles.icon}
                    {...props}
                    name="funnel-outline"
                />
            )}
            textStyle={styles.textStyle}
            onFocus={() => setValue("")}
        />
    );
};

export default class Buscar extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            locations: locations,
            showCard: false,
        };
        this.map = React.createRef();
    }

    mergeCoords = () => {
        const {latitude, longitude, desLatitude, desLongitude} = this.state;

        const hasStartAndEnd = latitude !== null && desLatitude !== null;

        if (hasStartAndEnd) {
            const concatStart = `${latitude},${longitude}`;
            const concatEnd = `${desLatitude},${desLongitude}`;
            this.getDirections(concatStart, concatEnd);
        }
    };

    async getDirections(startLoc, desLoc) {
        const travelMode = "walking";
        const request = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&travelmode=${travelMode}&key=AIzaSyAIwYjjp67PfxJYBwnWDfouWeoVBkcLoxI`;
        console.log("REQUEST: ", request);
        try {
            const res = await axios.get(request);
            const respJson = await res.data;
            const response = respJson.routes[0];
            const distanceTime = response.legs[0];
            const distance = distanceTime.distance.text;
            const time = distanceTime.duration.text;
            const points = Polyline.decode(
                respJson.routes[0].overview_polyline.points
            );
            const coords = points.map((point) => {
                return {
                    latitude: point[0],
                    longitude: point[1],
                };
            });
            this.setState({coords, distance, time});
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    onMarkerPress = (location) => () => {
        const {
            coords: {latitude, longitude},
        } = location;
        this.setState(
            {
                destination: location,
                desLatitude: latitude,
                desLongitude: longitude,
            },
            this.mergeCoords
        );
        this.setState({showCard: true});
    };

    renderMarkers = () => {
        const {locations} = this.state;
        return (
            <View>
                {locations.map((location, idx) => {
                    const {
                        coords: {latitude, longitude},
                    } = location;
                    return (
                        <Marker
                            onPress={this.onMarkerPress(location)}
                            onDeselect={() => this.setState({showCard : false})}
                            key={idx}
                            coordinate={{latitude, longitude}}
                        >
                            <MyMarker/>
                        </Marker>
                    );
                })}
            </View>
        );
    };

    onPress = () => {
        navigator.geolocation.getCurrentPosition(
            ({coords: {latitude, longitude}}) => {
                this.setState({latitude, longitude}, this.mergeCoords);
                if (this.map) {
                    console.log("curent location: ", this.state);
                    this.map.animateToRegion({
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    });
                }
            },
            (error) => console.log("Error:", error)
        );
    };

    async componentDidMount() {
        const {status} = await Permissions.getAsync(Permissions.LOCATION);

        if (status !== "granted") {
            const response = await Permissions.askAsync(Permissions.LOCATION);
        }
        navigator.geolocation.getCurrentPosition(
            ({coords: {latitude, longitude}}) =>
                this.setState({latitude, longitude}, this.mergeCoords),
            (error) => console.log("Error:", error)
        );

        const {
            locations: [sampleLocation],
        } = this.state;

        this.setState(
            {
                desLatitude: sampleLocation.coords.latitude,
                desLongitude: sampleLocation.coords.longitude,
            },
            this.mergeCoords
        );
    }

    render() {
        const {coords, latitude, longitude, showCard} = this.state;

        if (latitude) {
            return (
                <View style={styles.mapContainer}>
                    <MapView
                        ref={(map) => {
                            this.map = map;
                        }}
                        loadingEnabled
                        loadingIndicatorColor="#666666"
                        loadingBackgroundColor="#eeeeee"
                        showsUserLocation
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude,
                            longitude,
                            latitudeDelta: 0.004,
                            longitudeDelta: 0.001,
                        }}
                    >
                        {this.renderMarkers()}
                        <MapView.Polyline
                            strokeWidth={4}
                            strokeColor={red}
                            coordinates={coords}
                        />
                    </MapView>

                    {showCard ?
                        <Card
                            place={{
                                name: "Amura",
                                rating: 4.5,
                                distance: 2,
                                images: [],
                            }}
                        />
                        :
                        null
                    }
                    <View style={styles.searchBarContainer}>
                        <Search/>
                    </View>
                    <MyPosition onPress={this.onPress} {...this.state} />
                </View>
            );
        }
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Cargando...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myPos: {
        position: "absolute",
        flex: 1,

        alignItems: "center",
        width: "17%",
        height: "auto",
        backgroundColor: "white",
        right: 0,
        top: "20%",
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.15,
    },
    myPosIcon: {
        padding: 20,
        fontSize: 40,
        textAlign: "center",
    },
    mapContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    mapStyle: {
        width,
        height,
    },
    datePicker: {
        flex: 1,
        position: "absolute",
        padding: 5,
        paddingRight: 0,
        top: 250,
        backgroundColor,
        justifyContent: "center",
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.15,
    },
    searchBarContainer: {
        position: "absolute",
        top: "10%",
        alignSelf: "center",
    },
    input: {
        borderRadius: 15,
        width: width * 0.9,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.15,
    },
    icon: {
        width: 16,
        height: 16,
        margin: 0,
        padding: 0,
    },
    textStyle: {
        color: purple,
        paddingVertical: 5,
        fontSize: 20,
    },
});
