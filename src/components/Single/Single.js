import { useParams } from 'react-router-dom'
import Sale from "../../TempData/Data"
import "./Single.css"
import React from 'react'
import Nav from '../Navbar/Nav'

const Single = () => {
const {sid} = useParams();
const data = Sale.find((data)=>data.id === sid )

const {image,head,bath,room, address,Price} = data
console.log(data)
  return (
    <div className='single'>
      <div className='s-navigation'>
        <Nav/>
      </div>
      <div className='single-container'>
          <div className='single-body'>
            <div className='single-name'>
              <h1>{head}</h1>
              <p>{address} <span className='phone'>
                <i className="fa-solid fa-phone"></i> +94 857 65457
                </span>
              </p>

            </div>
            <div className='single-price'>
                <h2>${Price} <span>/month</span></h2>
            </div>
          </div>
          <div className='single-img'>
              <div className='image'>
                  <img src={image} alt="img"/>
              </div>
              {/* <div className='image'>
                  <img src={image} alt="img"/>
              </div> */}
              <div className='view'>
                  <button >all photos <i className="fa-solid fa-arrow-right"></i></button>
              </div>
          </div>
        </div>
        <div className='single-second-container'>
          <div className='des'>
            <h5>Description</h5>
            <p>
            Massa tempor nec feugiat nisl pretium.
             Egestas fringilla phasellus faucibus scelerisque 
             eleifend donec. Porta nibh venenatis cras sed felis 
             eget velit aliquet. Neque volutpat ac tincidunt vitae 
             semper quis lectus. Turpis in eu mi bibendum neque egestas 
             congue quisque. Sed elementum tempus egestas sed sed risus 
             pretium quam. Dignissim sodales ut eu sem. Nibh mauris 
             cursus mattis molestie a iaculis 
            at erat pellentesque. Id interdum velit laoreet id donec ul
            trices tincidunt.
            </p>
          </div>
          <div className="over">
            <h5>overview</h5>
            <div className='over-body'>
                <div className='icons'>
                  <i className="fa-solid fa-bed"></i>
                  <div className='icon-body'>
                    <p>bedrooms</p>
                   
                    <h3> {room}</h3>
                  </div>
                </div>
                <div className='icons'>
                <i className="fa-solid fa-shower"></i>
                  <div className='icon-body'>
                    <p>bathrooms</p>
                    <h3> {bath}</h3>
                  </div>
                </div>
                <div className='icons'>
                  <i className="fa-solid fa-bed"></i>
                  <div className='icon-body'>
                    <p>land size</p>
                    <h3> {room}</h3>
                  </div>
                </div>
                <div className='icons'>
                <i className="fa-solid fa-border-all"></i>
                  <div className='icon-body'>
                    <p>square feet</p>
                    <h3> {room}</h3>
                  </div>
                </div> 
               
            </div>
          </div>
        </div>
    </div>
  )
}

export default Single

