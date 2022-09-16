import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import TextReducer from "./TextReducer";
import userReducer from "./userReducer";
import hotelSlice from "./HotelReducer";

export const RootReducer = combineReducers({ TextReducer, userReducer, hotelSlice });

export type AppState=ReturnType<typeof RootReducer>;//schema of root reduce is stored in App state

export const ConfigureStore=()=>{
    return createStore(RootReducer,{},devToolsEnhancer({}));
}