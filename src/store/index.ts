import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import combineReducers from "redux";

const counterPersistConfig = {
  key: "counter",
  storage,
};

/*//Combinar Reducers si hay mas de uno
const rootReducer = combineReducers({
  // Añade más slices aquí si los tienes
});*/

const persistedCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactiva esta comprobación para evitar errores con redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
