import "./button.css";
interface Iprops {
    label: string
 

}
export default function Button(props: Iprops) {
    return (
        <button className="button">{props.label}</button>
    );
}
