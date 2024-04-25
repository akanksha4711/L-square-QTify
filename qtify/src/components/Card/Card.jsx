import Chip from '@mui/material/Chip';
import "./Card.css";

export default function Card({img, follows, name, likes}) {
    return (
        <div className="card">
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