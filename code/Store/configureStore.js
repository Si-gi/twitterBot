import {createStore} from "redux";
import usersReducer from "./Reducers/usersReducer";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage: ExpoFileSystemStorage
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
}