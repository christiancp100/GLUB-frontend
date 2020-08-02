import React from "react";
import {View} from "react-native";
import {Calendar as KittenCalendar, Button} from "@ui-kitten/components";


interface CalendarProps {
    showDatePicker: boolean
}

const Calendar = ({showDatePicker}: CalendarProps) => {

    const useCalendarState = (initialState = null) => {
        const [date, setDate] = React.useState(initialState);
        return {date, onSelect: setDate};
    };

    const minMaxCalendarState = useCalendarState();

    const now = new Date();

    return (
        <>
            {showDatePicker ?
                <View style={{
                    position: "absolute",
                    top: "20%",
                    flex: 1,
                    alignSelf: "center",
                    zIndex: 1000
                }}>
                    <KittenCalendar
                        style={
                            {
                                backgroundColor: "white"
                            }
                        }
                        min={now}
                        {...minMaxCalendarState}
                        //renderFooter={() => (<Button>Hola hijos de puta</Button>)}
                    />
                </View>

                :
                null
            }
        </>
    )
}

export default Calendar;
