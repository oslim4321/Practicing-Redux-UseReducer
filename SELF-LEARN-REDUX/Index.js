const CAKE_ORDER = 'CAKE_ORDER'

// import redux from 'redux'


function ordercake() {
    return {
        type: CAKE_ORDER,
    }
}
const initialState = {
    numOfcake: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case CAKE_ORDER:
        return { ...state, numOfcake: state.numOfcake-1 }

    default:
        return state
    }
}
