import { createReducer, createAction } from "redux-starter-kit";
import { state } from "../state";
import { Contact } from "../../interfaces/Contact";

const { contacts } = state;

export const contactsReducer = createReducer(contacts, {
    ADD_CONTACT: (contacts, action): Contact[] => {
        if (action.payload) {
            contacts.push(action.payload);
        }
        return contacts;
    }
});

createAction("ADD_CONTACT");
