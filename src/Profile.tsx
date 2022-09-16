import { Fab, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import { context } from "./Usercontext";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const Usestyles=makeStyles({
    parent:{
        width: '100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        gap:'15px'
    },
    buttons:{
        display:'flex',
        justifyContent:"flex-end",
        gap:"10px"
    }
});
export default function Profile() {
    const Contxt = useContext(context);
    const history = useHistory();
    const styles=Usestyles();
    return (
        <div className={styles.parent}>
            <div className={styles.container}>
            <Typography variant="h2">PROFILE</Typography>
            <Typography variant="h5">{Contxt?.displayName}</Typography>
            <Typography variant="h5">{Contxt?.email}</Typography>
            <Typography variant="h5">{Contxt?.uid}</Typography>
            <div className={styles.buttons}>
            <Fab color="primary" variant="extended" onClick={() => firebase.auth().signOut()}>Sign Out</Fab>
            <Fab color="secondary" variant="extended" onClick={() => history.push("/Home")}>Home</Fab>
            </div>
            </div>
        </div>
    )
}