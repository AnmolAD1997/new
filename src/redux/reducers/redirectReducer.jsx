import { ADD_LINK } from "../actions/actionTypes"

export default function (state = '/', action) {
    switch (action.type) {
        case ADD_LINK:
            state = action.payload;
            return state
        default:
            return state
    }
}