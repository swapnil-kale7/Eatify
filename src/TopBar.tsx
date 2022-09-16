import { AppBar, Button, colors, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";

import { useHistory } from "react-router-dom";

import { context } from "./Usercontext";

interface Iprops{
    searchString:string
    setSearchString: (searchString:string) =>void;
}

const USestyles = makeStyles({
    button: {
        color: 'white',

    },
    nav: {
        background: '#008080'
    },
    searchbar: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        color: 'white',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchIcon: {
        margin: '0 15px'
    },
    searchBox:{
        width:'100%'
    }
})
export default function TopBar(props:Iprops) {
    const styles = USestyles();
    const history = useHistory();
    const contxt=useContext(context);
    const isuserExist= contxt && contxt.uid;//if contxt exist and contxt.uid exist then dont show login page and signup
    return (
        <AppBar className={styles.nav}>
            <Toolbar className={styles.toolbar}>
                <div className={styles.searchbar}>
                    <SearchIcon className={styles.searchIcon} />
                    <InputBase className={styles.searchBox} placeholder={'Search...'} value={props.searchString} 
                    onChange={(e)=>props.setSearchString(e.target.value)}/>
                </div>
                <div>
                    {! isuserExist && <Button className={styles.button} onClick={() => history.push("/Login")}>Login</Button>}
                    {!isuserExist && <Button className={styles.button} onClick={() => history.push("/SignUp")}>Sign Up</Button>}
                    {isuserExist && <Button className={styles.button} onClick={() => history.push("/Profile")}>Profile</Button>}
                </div>
            </Toolbar>

        </AppBar>
    )
}