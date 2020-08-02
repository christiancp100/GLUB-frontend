import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Inicio from "../screens/Inicio";
import SingleEvent from "../screens/SingleEvent";

const Stack = createStackNavigator();

const InicioStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Inicio"
        >
            <Stack.Screen options={{headerShown: false}} name="Inicio" component={Inicio}/>
            <Stack.Screen name="SingleEvent"
                          component={SingleEvent}
                          //options={({route}) => ({title: route.params.name})}/>
                          options={({ navigation, route }) => ({
                              title: route.params.name,
                              headerShown : false
                          })}
            />
        </Stack.Navigator>
    )
}

export default InicioStackNavigator;