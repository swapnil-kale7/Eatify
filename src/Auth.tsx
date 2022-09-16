import { Button, Fab, makeStyles, MuiThemeProvider, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

interface Iauth{
    title:string;
    showsignup?:boolean;
    showLogin?:boolean;
    showName?: boolean;
    onSubmitClick:(email:string ,password:string,displayName?:string)=>Promise<string>;
}
interface iAuthentication{
    name:string;
    email:string;
    password:string;
    
}


const useStyle=makeStyles({
    parentcont:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        width:'75%',
        display:'flex',
        flexDirection:"column",
        gap:'15px'
    },
    buttons:{
        display:'flex',
        gap:'10px',
        justifyContent:'flex-end'
    },
    title :{
        display:'flex',
        justifyContent: 'center'
    },
    error:{
        color:'red'
    }
})
export default function Auth(props:Iauth){
    const{register,reset,handleSubmit,formState}=useForm<iAuthentication>();
    //for loading spinner
    const[showLoadingSpinner,setLoadingSpinner]=useState<boolean>(false);
    const [errorMessage,setErrorMessage]=useState<string>("");
    const style=useStyle();
    async function onSubmit(data:iAuthentication){
        setLoadingSpinner(true);
        const message=await props.onSubmitClick(data.email, data.password, data.name);
        setLoadingSpinner(false);
        if (message) {
            setErrorMessage(message);
        }else{
            history.push("/Home")
        }
        
    }
    const history = useHistory();
    return(
      
        <div className={style.parentcont}>
            <form onSubmit={handleSubmit(onSubmit) }className={style.container}>
                <Typography variant="h3" className={style.title}>{props.title}</Typography>
                {props.showName && <TextField variant="outlined" placeholder="Name" {...register("name",{
                    required:true,
                    minLength:{value:4,message:"Name should be min 4 length"}
                })}
                error={formState.errors?.name!==undefined}
                helperText={formState.errors?.name?.message}
                />}
                <TextField variant="outlined" placeholder="Email" type={"email"} {...register("email",{
                    required:true,
                    pattern:{value: /[\w.]+@\w+\.[\w.]+/,message:"email invalid"}
                })}
                    error={formState.errors?.email !== undefined}
                    helperText={formState.errors?.email?.message}/>
                <TextField variant="outlined" placeholder="Password" type={"password"} {...register("password",{
                    required: true,
                    minLength: { value: 6, message: "password should be min 6 length" }
                })}
                    error={formState.errors?.password !== undefined}
                    helperText={formState.errors?.password?.message}/>
                <div className={style.buttons}>
                   
                    <Fab color="primary" variant="extended" type="submit">Submit</Fab>
                    <Fab color="secondary" variant="extended" onClick={()=>reset()}>Reset</Fab>
                    <Fab variant="extended" onClick={() => history.push("/Home") }>Home</Fab>
                    {props.showsignup && <Fab variant="extended" onClick={() => history.push("/SignUp")}>Sign Up</Fab>}
                    {props.showLogin && <Fab variant="extended" onClick={() => history.push("/Login")}>Login</Fab>}
                </div>
                {showLoadingSpinner && <LoadingSpinner showBackdrop={true}/>}
                {errorMessage && <Typography variant="h3" className={style.error}>{errorMessage}</Typography>}
            </form>
        </div>
     
    )
}


