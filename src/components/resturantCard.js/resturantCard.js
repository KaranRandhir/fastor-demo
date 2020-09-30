import React from 'react' ;
import foodimg from '../../assets/foodimg.jpg'
import './resturantCard.css' 

const ResturantCard = (props) => {
    return (
        <div className="home">
        <div className="res-card">
        <img  src={props.img} style={{height:"8rem",width:"8rem",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}onError={(e)=>{e.target.onerror = null; e.target.src=foodimg}}/>
        <br/>
    {props.name}
        </div>
        </div>
    )
}


export default ResturantCard;