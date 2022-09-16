import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Iperson {
    id: number;
    email: string;
    first_name: string
    last_name: string;
    avatar: string;
}

const usersReducer=createSlice({
    name:"userReducer",
    initialState:[]as Iperson[],
    reducers:{
        write(_state:Iperson[],action:PayloadAction<Iperson[]>){
            return action.payload;
        }
    }
});

export const {write}=usersReducer.actions;

export default usersReducer.reducer;
