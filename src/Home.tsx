import { AppBar ,Button,CircularProgress,colors,Grid,InputBase,makeStyles,Toolbar} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import { started , completed, IHotel} from "./HotelReducer";
import { AppState } from "./AppState";
import LoadingSpinner from "./LoadingSpinner";
import Hotelcard from "./Hotelcard";


interface IFiles{
    restaurant:IHotel
}

const USestyles=makeStyles({
    grid:{
        marginTop:'70px'
    }
})
export default function Home(){
    const styles=USestyles();
    const [searchString,setSearchString]=useState<string>('');
    const disptach=useDispatch();
    const hotelReducer=useSelector((x:AppState)=>x.hotelSlice);
    useEffect(()=>{
        async function api(){
            const response = await fetch("/hotels.json");
            const json:IFiles[] = await response.json();
            disptach(completed(json.map(x=>x.restaurant)))
        }
        disptach(started());
        api();
        
    },[disptach]);
   
    return(
        <>
        <TopBar searchString={searchString} setSearchString={setSearchString}/>
            {hotelReducer.isLoading && <LoadingSpinner showBackdrop={true}/>}
            {/* if there is not loading */}
            <Grid container spacing={3} className={styles.grid}>
                {!hotelReducer.isLoading && hotelReducer.hotels.filter(x=>x.name.toLowerCase().includes(searchString.toLowerCase())).map(x => <Grid item><Hotelcard {...x} /></Grid>)}
            </Grid>
           
        </>
    )
}