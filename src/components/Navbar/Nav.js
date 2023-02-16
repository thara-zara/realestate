import React,{useContext} from 'react'
import "./Nav.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import MyContext from "../../Context/MyContext"

const Nav = () => {
const {favourite} = useContext(MyContext)
  return (
    <div className='navigation'>
        <div className='nav-bar'>
            <div className='nav-items'>
                <Link to={`/`}>
                    <div className='logo'>
                        <img src={logo} alt="logo"/>
                    </div>
                </Link>
                <div className='nav-right'>
                    <Link to={`/Favourite`}>
                        <div className= {favourite.length > 0 ? 'fav' : "fav-no"}>
                            <i className="fa-regular fa-heart"></i>
                        </div>
                    </Link>
                    <div className='log'>
                        <button><span>add listing </span><i className="fa-solid fa-house-chimney"></i></button>
                    </div>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Nav


