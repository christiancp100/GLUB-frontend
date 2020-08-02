import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";
import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Colors, {
    backgroundColor,
    lightPurple,
} from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Inicio from "../screens/Inicio";
import Buscar from "../screens/Buscar";
import Entradas from "../screens/EntradasyCarrito";
import Favoritos from "../screens/Favoritos";
import Perfil from "../screens/Perfil";
import { BottomTabParamList } from "../types";
import color from "color";
import InicioStackNavigator from "./InicioStackNavigator";
const RADIUS = 10;


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    const DEVICE_WIDTH = Dimensions.get("window").width;
    return (
        <BottomTab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tabIconSelected,
                inactiveTintColor: Colors[colorScheme].tabIconDefault,
                style: {
                    borderTopLeftRadius: 15,
                    borderTopWidth: 0,
                    borderTopRightRadius: 15,
                    border: 0,
                    backgroundColor:
                        Colors[colorScheme].backgroundNavigationColor,
                    position: "absolute",
                    padding: 10,
                    height: "10%",

                    alignItems: "center",
                },
                showLabel: false,
            }}
        >
            <BottomTab.Screen
                name="Inicio"
                component={InicioStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-home" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Buscar"
                component={Buscar}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-search" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Entradas"
                component={Entradas}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Morph>
                            <Fontisto
                                name="ticket-alt"
                                size={35}
                                color={lightPurple}
                                style={styles.neumorphism}
                            />
                        </Morph>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-heart" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-person" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const Morph = ({ radius, style, revert, borderless, children }) => {
    const topStyles = StyleSheet.flatten([
        styles.morphTop,
        revert && {
            shadowColor: color(backgroundColor).darken(0.3).alpha(0.5),
        },
        { borderRadius: radius || RADIUS },
        style,
    ]);

    const bottomStyles = StyleSheet.flatten([
        styles.morphBottom,
        revert && {
            shadowColor: color(backgroundColor).lighten(0.5).alpha(0.5),
        },
        { borderRadius: radius || RADIUS },
    ]);

    const morphStyles = StyleSheet.flatten([
        styles.morph,
        borderless && { borderWidth: 0 },
        { borderRadius: radius || RADIUS },
    ]);

    return (
        <View style={topStyles}>
            <View style={bottomStyles}>
                <View style={morphStyles}>{children}</View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    neumorphism: {
        marginHorizontal: 20,
        padding: 0,
        fontWeight: "bold",
        textAlign: "center",
    },
    morph: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: backgroundColor,
        borderColor: color(backgroundColor).lighten(0.5).alpha(0.2),

        alignContent: "center",
    },
    morphTop: {
        borderRadius: 10,
        // box-shadow is equivalent to shadow style in React Native
        shadowOffset: {
            width: -6,
            height: -6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: color(backgroundColor).lighten(0.5).alpha(0.5), // this should be lighter shadow
    },
    morphBottom: {
        borderRadius: 10,
        // box-shadow is equivalent to shadow style in React Native
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: color(backgroundColor).darken(0.3).alpha(0.5), // this should be darker shadow
    },
    entradasIcon: {
        width: "100%",
        alignItems: "center",
    },

    gradient: {
        alignItems: "center",
        padding: 15,
        borderRadius: 15,
    },
});
