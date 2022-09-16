import Auth from "./Auth";
import firebase from "firebase/app";
export default function signup(){
    const onSubmitClick = async (email: string, password: string, displayName?: string)=>{
        try{
            const account=await firebase.auth().createUserWithEmailAndPassword(email,password);
            account?.user?.updateProfile({ displayName});
            return;
        }catch(e:any){
            console.error(e);
            return e.message;
        }
        };
    return(
        <Auth title="Welcome to Sign Up Page" showsignup={false} showLogin={true} showName={true} onSubmitClick={onSubmitClick}/>
    )
}