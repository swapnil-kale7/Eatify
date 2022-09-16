import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import LoadingSpinner from "./LoadingSpinner";

interface Iprops{
    children: React.ReactNode;
}

export const context=createContext<firebase.User | null>(null);

export default function Usercontext(props:Iprops){
    const [user, setUser] = useState<firebase.User | null>(null);
    const [showLoading,Loading]=useState<boolean>(true);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user: firebase.User | null)=>{
            Loading(true);
            setUser(user);
            Loading(false);
        })
    },[]);

    return(
        <context.Provider value={user}>
            {!showLoading && props.children}
            {showLoading && <LoadingSpinner showBackdrop={false}/>}
        </context.Provider>
    );
}