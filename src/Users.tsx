import { useEffect, useState } from "react";
import "./button.css"

interface Iperson {
    id: number;
    email: string;
    first_name: string
    last_name: string;
    avatar: string;
}

export default function Users() {
    const [persons, setpersons] = useState<Iperson[]>([]);
    const[search,setSearch]=useState<string>("");
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json: { data: Iperson[] } = await response.json();
            setpersons(json.data);
        }
        api();
    }, []);
    const filterperson=(person:Iperson)=>{
        const name=[person.first_name.toLowerCase(),person.last_name.toLowerCase()];
        return name.some(x=>x.includes(search.toLowerCase()));
}
    return (
        <>
        <input type="text" onChange={e=>setSearch(e.target.value)}/>
        <div className="grid">
            {persons.filter(filterperson).map(renderPerson)}
        </div>
        </>
    )

}

function renderPerson(person: Iperson, index: number) {
    return (
        <div key={index}>
            <img src={person.avatar} alt={person.first_name} />
            <div>{person.first_name + " " + person.last_name}</div>
        </div>
    )
}