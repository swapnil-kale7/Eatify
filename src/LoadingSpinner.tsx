import { CircularProgress, makeStyles,Backdrop } from "@material-ui/core";

const useStyle=makeStyles({
    container:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:55
    },
    backdrop:{
        zIndex:100,
    }
})
interface Iprop{
    showBackdrop:boolean;
}
export default function LoadingSpinner(props:Iprop){
    const styles=useStyle();
    const renderLoadingSpinner=()=>{
        
        return(<div className={styles.container}>
            <CircularProgress />
        </div>)
    }
    if (props.showBackdrop) {
        return (
            <Backdrop open={props.showBackdrop} className={styles.backdrop}>
                {renderLoadingSpinner()}
            </Backdrop>
    
            )
        }
        return renderLoadingSpinner();
}