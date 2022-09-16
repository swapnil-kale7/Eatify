import { useState } from "react";

export default function ListNote() {
    const [notes,setNotes]=useState<string[]>([]);
    const [currNote,setcurrNote]=useState<string>('');
    const updateNotes=()=>{
        setNotes([...notes,currNote])
    }
    const delNote=(index:number)=>{
        const clone=[...notes];
        setNotes(clone.filter((x,i)=>i !==index))
    }
    const renderListItem=(value:string,index:number)=>{
        return(
            <li>
                <div>{value}</div>
                <button onClick={()=>delNote(index)}>delete</button>
            </li>
        )
    }
    return(
        <>
            <input type="text" onChange={(e)=>setcurrNote(e.target.value)}/>
            <button onClick={updateNotes}>Add Note</button>
            <ul>
                {notes.map(renderListItem)}
            </ul>

        </>
    )
}