import { LOAD_ASSOCIATES } from '../actions/actionTypes';

export default function (state = null, action) {
    switch (action.type) {
        case LOAD_ASSOCIATES:
            return action.payload;
        default:
            return state;
    }
}