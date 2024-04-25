import Chip from '@mui/material/Chip';
import "./Card.css";

export default function Card({img, follows, name, likes, number}) {
    console.log(number);
    return (
        <div className="card tooltip">
            {number ? <span className='tooltiptext'>{number} songs</span> : <></>}
            <div className="card-info">
                <img src={img} alt="card-img"></img>
                <Chip className='chip' label={likes ? `${follows} Likes` : `${follows} Follows`} color='secondary'/>
            </div>
            <div className="card-name">
                {name}
            </div>
        </div>
    )
}