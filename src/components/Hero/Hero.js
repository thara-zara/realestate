import React,{useContext} from 'react'
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg"
import Nav from '../Navbar/Nav';
import "./Hero.css"
import MyContext from "../../Context/MyContext"

const Hero = () => {

const {favourite,handleSelected,handleName,handleFilter,handleSeacrh} = useContext(MyContext)

const handleSelect = (event)=>{
handleSelected(event.target.value)
}
const handleSearchName = (event)=>{
    handleName(event.target.value)
}

  return (  
  <div className='hero'>
        <div className='navigation-bar'>
            <Nav/>
        </div>
        <div className='hero-body'>
            <div className='hero-left'>
                <div className='hero-head'>
                Find a Home You'll Love 
                </div>
                <div className='hero-sub'>
                Discover a Place You'll Love to Live
                </div>
                <div className="hero-btn">
                    <button>explore</button>
                </div>
            </div>
            <div className='hero-right'>
                <div className='img1'>
                    <img src={one} alt="img"/>
                </div>
                <div className='img2'>
                    <img src={two} alt="img"/>
                </div>
            </div>
        </div>
        <div className='filter-bar'>
            <div className='filter-bar-body'>
                <div className='selector'>
                    <div className='options'>
                        <span>
                        <i className="fa-solid fa-bed"></i>
                        </span>
                        <select className='select' name="Bedroom" onChange={handleSelect}>
                            <option disabled>any</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>   
                        </select>
                    </div>
                    <div className='filter-btn'>
                        <button onClick={() => handleFilter()}>filter 
                        </button>
                    </div>
                </div>
                <div className='search-bar'>
                    <div className='search'>
                        <input type="text" placeholder='type something.....' onChange={handleSearchName}></input>
                        <i className="fa-solid fa-magnifying-glass" onClick={() => handleSeacrh()}></i>
                    </div>
                    
                </div>
            </div>
            {/* <p>({favourite.length})</p> */}
        </div>
    </div>
  )
}

export default Hero
