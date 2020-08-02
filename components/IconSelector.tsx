import {FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

export const IconSelectorWithNames = ({drink}) => {
    let type = drink.type;
    if(drink.quantity > 1){
        type = type + "s";
    }
    switch (drink.type){
        case "cerveza":
            return <><Ionicons name="md-beer" size={15} color="black"/> {drink.quantity} {type}</>
        case "cocktail":
            return <><Fontisto name="cocktail" size={15} color="black"/> {drink.quantity} {type}</>
        case "chupito":
            return <><FontAwesome5 name="glass-whiskey" size={15} color="black"/> {drink.quantity} {type}</>
        case "refresco":
            return <><MaterialCommunityIcons name="cup" size={15} color="black"/> {drink.quantity} {type}</>
        case "botella":
            return <><FontAwesome5 name="wine-bottle" size={20} color="black"/> {drink.quantity} {type}</>
        default:
            return <><Ionicons name="md-beer" size={15} color="black"/> {drink.quantity} {type}</>
    }
}

interface IconSelectorProps {
    drink : string,
    color : string,
    size : number
}
export const IconSelector = ({drink, color, size} : IconSelectorProps) => {

    switch (drink){
        case "cerveza":
            return <><Ionicons name="md-beer" size={size} color={color}/> </>
        case "cocktail":
            return <><Fontisto name="cocktail" size={size} color={color}/></>
        case "chupito":
            return <><FontAwesome5 name="glass-whiskey" size={size} color={color}/></>
        case "refresco":
            return <><MaterialCommunityIcons name="cup" size={size} color={color}/></>
        case "botella":
            return <><FontAwesome5 name="wine-bottle" size={size + 5} color={color}/></>
        default:
            return <><Ionicons name="md-beer" size={size} color={color}/></>
    }
}

export default IconSelectorWithNames;