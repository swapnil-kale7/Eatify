import { useEffect, useState } from "react";

export default function useEffMul() {
   const[index,setindex]=useState<number>(1);
   const[title,setTitle]=useState('');
   useEffect(()=>{
        async function api() {
            const response = await fetch('image.https://jsonplaceholder.typicode.com/todos/'+index);
            const json=await response.json();
            setTitle(json.title);
        }
        api();
   },[index]);
   return(
    <>
        <input type="text" onChange={e=>setindex(parseInt(e.target.value))}/>
        <div>{title}</div>
    </>
   ) 
}