
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Idata{
    name:string;
}

/*
insert into table colm1,colm2

state-current data of table{name:''}

*/

const TextReducer=createSlice({
    name:"TextReducer",
   initialState:{name:''}as Idata,
   reducers:{
        write(state:Idata,action:PayloadAction<string>){
            state.name=action.payload;
        }
   } 
});

export const {write}=TextReducer.actions;

export default TextReducer.reducer;