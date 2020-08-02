import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    VirtualizedList, ScrollView,
} from "react-native";
import { backgroundColor } from "../../constants/Colors";
import EventCard from "../../components/EventCard";
import { FlatList } from "react-native-gesture-handler";
import {events} from "../../api/eventsData";

const styles = StyleSheet.create({
    background: {
        backgroundColor,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        backgroundColor,
        paddingBottom: 100,
        alignItems: "center",
        marginBottom: 100
    },
    text: {
        color: "white",
    },
});

const DATA = [
    {
        id: 0,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 1,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 2,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 3,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 4,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 5,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 6,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 7,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 8,
        name: "Neon Party",
        clubName: "PELÍCANO",
        place: "Los Cantones, A Coruña",
        date: new Date(),
        imagePath:
            "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

const renderEventCard = ({ item }: any) => {
    return <EventCard {...item} />;
};

interface TrendProps {
    scrollY?: Animated.Value;
}
export default function Trend({}: TrendProps) {
    return (
        <View style={{backgroundColor}}>
            <FlatList
                data={events}
                contentContainerStyle={styles.container}
                renderItem={renderEventCard}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

