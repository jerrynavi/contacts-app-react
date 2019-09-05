import { configureStore } from "redux-starter-kit";
import { contactsReducer } from "../reducers/contactsReducer";

export const store = configureStore({
    reducer: contactsReducer,
});
