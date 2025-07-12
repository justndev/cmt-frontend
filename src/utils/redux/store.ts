import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

import userReducer from "./userSlice";

const rootReducer = combineReducers({
    user: userReducer,
});

const getDynamicStorage = (persistent: boolean = true) => {
    if (typeof window === 'undefined') {
        return storage;
    }

    return persistent ? storage : sessionStorage;
};

const getUserPersistencePreference = () => {
    if (typeof window !== 'undefined') {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        return rememberMe;
    }
    return true;
};

const persistConfig = {
    key: "root",
    storage: getDynamicStorage(getUserPersistencePreference()),
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/PAUSE",
                    "persist/FLUSH",
                    "persist/PURGE",
                    "persist/REGISTER"
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
