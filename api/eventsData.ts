import {Text} from "react-native";
import React from "react";

export const events = [
    {
        id: 0,
        name: "Neon Party",
        images: [require("../assets/images/party_example_1.jpg"), require("../assets/images/party_example_2.jpg")],
        place: "Los Cantones, A Coruña",
        organizer: "Pelícano",
        date: new Date(),
        description: "En Pelícano podrás encontrar la mejor variedad de música en todo Coruña. Con múltiples salas" +
            "y eventos, vamos a hacer que tu noche sea inolvidable. También disponemos de los reservados" +
            " más exclusivos de la ciudad.",
        tickets: [
            {
                id: 0,
                premium: false,
                reservado: false,
                price: 12.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
        ]
    },
    {
        id: 1,
        name: "Post Covid-19 Party",
        images: [require("../assets/images/coronavirus.jpg"), require("../assets/images/party_example_1.jpg")],
        place: "Av. Porto da Coruña, A Coruña",
        organizer: "Amura",
        date: new Date(),
        description: "En Pelícano podrás encontrar la mejor variedad de música en todo Coruña. Con múltiples salas" +
            "y eventos, vamos a hacer que tu noche sea inolvidable. También disponemos de los reservados" +
            " más exclusivos de la ciudad.",
        tickets: [
            {
                id: 0,
                premium: false,
                reservado: false,
                price: 12.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 1,
                premium: true,
                reservado: false,
                price: 49.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 2,
                premium: false,
                reservado: true,
                howManyPeople: 30,
                price: 499.95,
                drinks: [
                    {
                        type: "botella",
                        quantity: 4
                    },
                    {
                        type: "refresco",
                        quantity: 12
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Project X",
        images: [require("../assets/images/party_example_2.jpg"), require("../assets/images/party_example_2.jpg")],
        place: "Los Cantones, A Coruña",
        organizer: "My Dux",
        date: new Date("08/04/2020"),
        description: "En Pelícano podrás encontrar la mejor variedad de música en todo Coruña. Con múltiples salas" +
            "y eventos, vamos a hacer que tu noche sea inolvidable. También disponemos de los reservados" +
            " más exclusivos de la ciudad.",
        tickets: [
            {
                id: 0,
                premium: false,
                reservado: false,
                price: 12.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 1,
                premium: true,
                reservado: false,
                price: 49.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 2,
                premium: false,
                reservado: true,
                howManyPeople: 30,
                price: 499.95,
                drinks: [
                    {
                        type: "botella",
                        quantity: 4
                    },
                    {
                        type: "refresco",
                        quantity: 12
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "H2O Party",
        images: [require("../assets/images/pineapple.jpg"), require("../assets/images/party_example_2.jpg")],
        place: "Los Cantones, A Coruña",
        organizer: "Amura",
        date: new Date(),
        description: "En Pelícano podrás encontrar la mejor variedad de música en todo Coruña. Con múltiples salas" +
            "y eventos, vamos a hacer que tu noche sea inolvidable. También disponemos de los reservados" +
            " más exclusivos de la ciudad.",
        tickets: [
            {
                id: 0,
                premium: false,
                reservado: false,
                price: 12.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 1,
                premium: true,
                reservado: false,
                price: 49.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 2,
                premium: false,
                reservado: true,
                howManyPeople: 30,
                price: 499.95,
                drinks: [
                    {
                        type: "botella",
                        quantity: 4
                    },
                    {
                        type: "refresco",
                        quantity: 12
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        name: "San Roque",
        images: [require("../assets/images/fuegos-artificiales.jpg"), require("../assets/images/party_example_2.jpg")],
        place: "Los Cantones, A Coruña",
        organizer: "Pelícano",
        date: new Date(),
        description: "En Pelícano podrás encontrar la mejor variedad de música en todo Coruña. Con múltiples salas" +
            "y eventos, vamos a hacer que tu noche sea inolvidable. También disponemos de los reservados" +
            " más exclusivos de la ciudad.",
        tickets: [
            {
                id: 0,
                premium: false,
                reservado: false,
                price: 12.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 1,
                premium: true,
                reservado: false,
                price: 49.95,
                drinks: [
                    {
                        type: "cerveza",
                        quantity: 1
                    },
                    {
                        type: "cocktail",
                        quantity: 1
                    },
                    {
                        type: "chupito",
                        quantity: 1
                    }
                ]
            },
            {
                id: 2,
                premium: false,
                reservado: true,
                howManyPeople: 30,
                price: 499.95,
                drinks: [
                    {
                        type: "botella",
                        quantity: 4
                    },
                    {
                        type: "refresco",
                        quantity: 12
                    },
                ]
            }
        ]
    }
]

