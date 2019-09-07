import { createReducer, createAction } from "redux-starter-kit";
import { state } from "../state";

export const contactsReducer = createReducer(state, {
    ADD_CONTACT: (state, action) => {
        if (action.payload) {
            state.contacts.push(action.payload);
        }
        return state;
    }
});

createAction("ADD_CONTACT");
