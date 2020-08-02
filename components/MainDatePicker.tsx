import React, {useState} from "react";
import {Animated, ScrollView, View, Text, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Button, Icon} from "@ui-kitten/components";

import {backgroundColor, red} from "../constants/Colors";
import {width} from "../constants/Layout";
import {weekdays} from "../constants/TimeStuff";
import {TouchableOpacity} from "react-native-gesture-handler";

function _daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

function _generateDays(date: Date): Array<number> {
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const daysInThisMonth = _daysInMonth(month, year);
    const daysRemaining = daysInThisMonth - today;
    let result: Array<number> = [];
    for (let i = 0; i <= daysRemaining; i++) {
        result.push(today + i);
    }
    return result;
}

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
    },
    dateContainer: {
        borderRadius: 12,
        width: 50,
        backgroundColor: red,
        paddingVertical: 15,
        paddingHorizontal: 6,
        marginHorizontal: 5,
    },
    dateTextCommon: {
        textAlign: "center",
        color: "white",
    },
    dateTextNumber: {
        fontWeight: "bold",
        fontSize: 17,
    },
    dateTextWeekDay: {
        marginTop: 3,
        fontSize: 12,
        fontWeight: "600",
    },
    selectedDay: {
        color: "#CCCCCC",
    },
    selectedDayContainer: {
        backgroundColor: "transparent",
    },
    calendarButtonContainer:  {
        position: "absolute",
        right: 0,
        height: 70,
        width: 70,
        backgroundColor,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    calendarButton: {

        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "white",
        borderWidth: 0,
        height: "100%",
        width: "100%",
    },
    calendarIcon: {
        margin: 0,
        padding: 0,
        color: red,
    },
    noMoney: {
        color: "white",
        fontWeight: "700",
        fontSize: 40,
        textTransform: "uppercase",
    },
    noMoneyContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: 20

    }
});

interface dateCardProps {
    number: number | null;
    weekDay: string | null;
    today: boolean | null;
    setDay?: React.Dispatch<React.SetStateAction<number | null>> | (() => void);
}

const DateCard = ({number, weekDay, today, setDay}: dateCardProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.dateContainer,
                !today ? styles.selectedDayContainer : null,
            ]}
            onPress={() => {
                if (setDay !== undefined) {
                    setDay(number);
                }
            }}
        >
            <Text
                style={[
                    styles.dateTextNumber,
                    styles.dateTextCommon,
                    !today ? styles.selectedDay : null,
                ]}
            >
                {number}
            </Text>
            <Text
                style={[
                    styles.dateTextWeekDay,
                    styles.dateTextCommon,
                    !today ? styles.selectedDay : null,
                ]}
            >
                {weekDay}
            </Text>
        </TouchableOpacity>
    );
};

interface Props {
    setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainDatePicker({setShowDatePicker}: Props) {
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const days: Array<number> = _generateDays(date);

    const [selectedDay, setSelectedDay] = useState<number | null>(today);

    return (
        <View>
            <ScrollView
                horizontal
                bounces
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                {days.map((day, i) => {
                    const loopDate = new Date(year, month, day);
                    const loopWeekDay = loopDate.getDay();
                    return (
                        <DateCard
                            key={i}
                            number={day}
                            weekDay={weekdays[loopWeekDay]}
                            today={day === selectedDay}
                            setDay={setSelectedDay}
                        />
                    );
                })}

                <TouchableOpacity style={styles.noMoneyContainer}><Text style={styles.noMoney}>
                    Glub lo mejor que hay
                </Text></TouchableOpacity>
                <DateCard number={null} weekDay={null} today={null}/>
            </ScrollView>
            <View style={styles.calendarButtonContainer}>
                <Button
                    onPressOut={() => setShowDatePicker(true)}
                    style={styles.calendarButton}
                    activeOpacity={0.2}
                    size="giant"
                    accessoryLeft={(props) => (
                        <AntDesign
                            style={styles.calendarIcon}
                            name="calendar"
                            size={30}
                            color={red}
                        />
                    )}
                />
            </View>
        </View>
    );
}
