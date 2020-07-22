const initialState = {userS: ["Simon", "Ayoub", "Bidule", "Toto"]};

function addUser(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
    case "ADD_USER":
        nextState = {
            ...state,
            userS: [...state.userS, action.value]
        };    
        return nextState || state;

    case "REMOVE_USER":
        nextState = {
            ...state,
            userS: state.userS.filter((u) => u !== action.value)
        };    
        return nextState || state;

    default:
        return state;
    }
}

export default addUser;