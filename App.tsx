import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
// Font
import {useFonts} from "@expo-google-fonts/inter";

// UI KITTEN (STYLES LIBRARY)
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lightContainer: {
        backgroundColor: "#D0D0C0",
    },
    darkContainer: {
        backgroundColor: "white",
    },
    lightThemeText: {
        color: "#242C40",
    },
    darkThemeText: {
        color: "#D0D0C0",
    },
});

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();


    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <AppearanceProvider>
                <SafeAreaProvider
                    style={[styles.container, styles.darkContainer]}
                >
                    <IconRegistry icons={EvaIconsPack} />
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar  style="light"/>
                    </ApplicationProvider>
                </SafeAreaProvider>
            </AppearanceProvider>
        );
    }
}
