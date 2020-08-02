import React, {Dispatch, SetStateAction, useEffect} from "react";
import {
    StyleSheet,
} from "react-native";
import Animated, {add} from "react-native-reanimated";

import {View, TouchableOpacity} from "react-native";
import {createMaterialTopTabNavigator, MaterialTopTabBarProps} from "@react-navigation/material-top-tabs";
import {backgroundColor, red} from "../constants/Colors";
import {width} from "../constants/Layout";
import Carrito from "../tabs/Entradas/Carrito";
import Entradas from "../tabs/Entradas/Entradas";

const TopTab = createMaterialTopTabNavigator();

interface TabBarProps {
    state: MaterialTopTabBarProps["state"];
    descriptors: MaterialTopTabBarProps["descriptors"];
    navigation: MaterialTopTabBarProps["navigation"];
    position: MaterialTopTabBarProps["position"];
    setScreen: Dispatch<SetStateAction<string>>;
}

function MyTabBar({state, descriptors, navigation, position, setScreen}: TabBarProps) {

    useEffect(() => {
        setScreen(state.routeNames[state.index]);
    }, [state.index]);

    return (
        <View
            style={{
                flexDirection: "row",
                width: width,
                paddingTop: 15,
                paddingBottom: 10,
                backgroundColor,
                justifyContent: "center",
            }}
        >
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        setScreen(route.name);
                    }
                };


                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                // modify inputRange for custom behavior
                const inputRange = state.routes.map((_, i) => i);
                const opacity = Animated.interpolate(position, {
                    inputRange,
                    outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            padding: 0,
                            marginHorizontal: -10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Animated.Text
                            style={[
                                {opacity: add(opacity, 0.3)},
                                styles.tabText,
                            ]}
                        >
                            {label}
                        </Animated.Text>
                        <Animated.View
                            needsOffscreenAlphaCompositing
                            style={[
                                styles.selectionDot,
                                {
                                    opacity,
                                },
                            ]}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

interface Props {
    setScreen: Dispatch<SetStateAction<string>>;
}

export function EntradasTabNavigator({setScreen}: Props) {
    // TODO si el carrito tiene elemntos la primera ruta va a ser el carrito
    return (
        <View style={styles.container}>

            <TopTab.Navigator initialRouteName="Entradas"
                              tabBar={(props) => <MyTabBar setScreen={setScreen} {...props} />}>
                <TopTab.Screen name="Entradas" component={Entradas}/>
                <TopTab.Screen name="Carrito" component={Carrito}/>
            </TopTab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    tabText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        padding: 0,
    },
    selectionDot: {
        marginTop: 5,
        backgroundColor: red,
        borderRadius: 50,
        width: 5,
        height: 5,
        textAlign: "center",
    },
});
