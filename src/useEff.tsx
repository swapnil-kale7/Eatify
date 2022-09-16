import { useEffect, useState } from "react";

export default function useEff(){
    const [title,setTitle]=useState("");
    useEffect(()=>{
        async function api() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
            const json= await response.json();
            const title=json.title;
            setTitle(title);
        }
        api();
    },[]);
    return(
        <div>{title}</div>
    )
}