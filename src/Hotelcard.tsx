import { Card, CardActionArea, CardContent, CardMedia, makeStyles, StylesProvider, Typography } from "@material-ui/core";
import { IHotel } from "./HotelReducer";


const Usestyles=makeStyles({
    image:{
        width:490,
        height:372
    }
})

// props for image src
export default function Hotelcard(props:IHotel){
    const style = Usestyles();
    return(
        <Card key={props.id}>
            <CardActionArea>
                <CardMedia component="img" image={props.featured_image} className={style.image}/>
                <CardContent>
                    <Typography variant="h5">{props.name}</Typography>
                    <Typography variant="body2">{props.cuisines}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}