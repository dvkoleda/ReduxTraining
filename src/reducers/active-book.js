/**
 * Created by dvkoleda on 27.05.17.
 */
import ActionsTypes from '../actions/constants';
// State is a latest state returned by this reducer. It is not application state!
export default function (state = null, action) {
    if ( action.type === ActionsTypes.BOOK_SELECTED ) {
        return action.payload;
    }
    return state;
}