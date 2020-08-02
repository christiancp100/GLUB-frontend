export const tickets = [
    {
        id: 0,
        name: "Project X",
        place: "Av. Porto da Coruña, A Coruña",
        organizer: "My Dux",
        date: new Date(),
        ticket: {
            id: 1,
            type: "Normal",
            quantity: 1,
            drinks: [
                {
                    type: "cerveza",
                    quantity: 3
                },
                {
                    type: "chupito",
                    quantity: 1
                }
            ]
        }
    },
    {
        id: 1,
        name: "H20 Party",
        place: "Av. Porto da Coruña, A Coruña",
        organizer: "Amura",
        date: new Date(),
        ticket: {
            id: 1,
            type: "PREMIUM",
            quantity: 1,
            drinks: [
                {
                    type: "cocktail",
                    quantity: 1
                },
                {
                    type: "chupito",
                    quantity: 1
                }
            ]
        }
    }
]