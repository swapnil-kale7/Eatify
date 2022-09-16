import Auth from "./Auth";
import firebase from "firebase";
export default function login() {
    async function onSubmitClick(email: string, password: string){
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            return;
        } catch (e:any) {
            
            return e.message;
        }
    };
    return (
        <Auth title="Welcome to Login Page" showsignup={true} showLogin={false} showName={false} onSubmitClick={onSubmitClick}/>
    )
}