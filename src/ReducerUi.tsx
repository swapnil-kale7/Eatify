
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { Iperson,write } from "./userReducer";

export default function ReducerUi(){
    const dispatch=useDispatch();
    const usersreducer=useSelector((x:AppState)=>x.userReducer);
    useEffect(()=>{
        async function api(){
            const response=await fetch("https://reqres.in/api/users");
            const json:{data :Iperson[]}=await response.json();
            dispatch(write(json.data));
        }
        api();
    },[dispatch]);

    return(
        <>
            {usersreducer.map(renderUser)};
        </>
    )
}

function renderUser(person:Iperson,index:number) {
    return(
        <div key={index}>
            <img src={person.avatar} alt={person.first_name}/>
        </div>
    );
}