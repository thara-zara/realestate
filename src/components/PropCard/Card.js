import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import MyContext from '../../Context/MyContext'

const Card = (props) => {
  const {addFavoutie,favourite} = useContext(MyContext)

  return (
    <div className='card'>
      <div className='card-img'>
            <img src={props.image} alt="img"/>
            <span><i className="fa-regular fa-heart" onClick={() => addFavoutie(props.item)}></i></span>        
      </div>
      <Link to={`/Single/${props.id}`}>
        <div className='card-body'>
          <h3>{props.head}</h3>
          <p>{props.address}</p>
          <h5 className='price'>${props.Price}<span>/month </span> </h5>
        </div>
      </Link>
      <div className='card-btm'>
      
        <div> <span>Bed</span> <i className="fa-solid fa-bed"></i> <span className='qty'>{props.room}</span></div>
        <div><span>Bath</span><i className="fa-solid fa-shower"></i><span  className='qty'>{props.bath}</span></div>
        <div><span>sqft</span><i className="fa-solid fa-border-all"></i><span className='qty'>{props.sqft}</span> </div>
       
      </div>
    </div>
  )
}

export default Card
