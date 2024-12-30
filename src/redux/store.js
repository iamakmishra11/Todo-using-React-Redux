import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer
});

const store = createStore(rootReducer);
export default store;
