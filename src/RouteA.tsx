import { useHistory, useParams } from "react-router-dom";

export default function RouteA() {
    const params=useParams<{name:string}>();
    const history=useHistory();
    return (
        <>
    <div>{"hello "+params.name}</div>
            <button onClick={() => history.goBack()}>peeche dekho</button>
        </>
    )
}