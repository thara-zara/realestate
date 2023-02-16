import React, { useContext } from 'react'
import Nav from '../Navbar/Nav'
import { Link } from 'react-router-dom'
import "./Fav.css"
import MyContext from "../../Context/MyContext"
import Sale from '../../TempData/Data'
import sale from "../../assets/sale.svg"


const Fav = () => {

  const {favourite} = useContext(MyContext)
  return (
    <div className='fav'>
      <Nav/>
      <div className='fav-body'>
      { favourite < 1 ?(
          <div className='empty'>
              <h1>no favourite</h1>
              <img src={sale} alt="img"/>
          </div>
      )
          :
           favourite.map((data,index)=>(
            <div className='card' key={index}>
                <div className='card-img'>
                      <img src={data.image} alt="img"/>       
                </div>
                <Link to={`/Single/${data.id}`}>
                  <div className='card-body'>
                    <h3>{data.head}</h3>
                    <p>{data.address}</p>
                    <h5 className='price'>${data.Price}<span>/month </span> </h5>
                  </div>
                </Link>
                <div className='card-btm'>
                  <div> <span>Bed</span> <i className="fa-solid fa-bed"></i> <span className='qty'>{data.room}</span></div>
                  <div><span>Bath</span><i className="fa-solid fa-shower"></i><span  className='qty'>{data.bath}</span></div>
                  <div><span>sqft</span><i className="fa-solid fa-border-all"></i><span className='qty'>{data.sqft}</span> </div>
                </div>
            </div>
              ))
              }
  

{/* 
          { favourite.map((data,index)=>(
          <div className='card' key={index}>
              <div className='card-img'>
                    <img src={data.image} alt="img"/>       
              </div>
              <Link to={`/Single/${data.id}`}>
                <div className='card-body'>
                  <h3>{data.head}</h3>
                  <p>{data.address}</p>
                  <h5 className='price'>${data.Price}<span>/month </span> </h5>
                </div>
              </Link>
              <div className='card-btm'>
                <div> <span>Bed</span> <i className="fa-solid fa-bed"></i> <span className='qty'>{data.room}</span></div>
                <div><span>Bath</span><i className="fa-solid fa-shower"></i><span  className='qty'>{data.bath}</span></div>
                <div><i className="fa-solid fa-border-all"></i><span className='qty'>{data.sqft}</span><span>sqft</span> </div>
              </div>
          </div>
            ))} */}
      </div>
    </div>
  )
}

export default Fav
