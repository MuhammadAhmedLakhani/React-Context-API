const InitialState = {
    theme: "light",
    version: 20
}


const reducer = (state, action) => {

    switch (action.type) {

        case "updateTheme":
            return {
                ...state,
                theme: "dark"
            }
            break
        default:
            console.log("no action")


    }


    return state
}


export  {reducer ,InitialState};