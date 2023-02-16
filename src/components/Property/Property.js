import React, { useContext } from 'react'
import Card from '../PropCard/Card'
import "./Property.css"
import MyContext from "../../Context/MyContext"

const Property = () => {
  const {find} = useContext(MyContext)

  return (
    <div className='property'>
        <div className='property-body'>
            <div className="property-head">
                Properties for Sale <span>(we have {(find.length)} results)</span>
            </div>
            <div className='property-content'>
              { 
        find.map((data,index)=>(
                  <Card key={index} data={data}
                  image={data.image}
                  Price={data.Price}
                  id={data.id}
                  head={data.head}
                  bath={data.bath}
                  room={data.room}
                  item={data}
                  address={data.address}
                  sqft={data.sqft}
                  />   
              ))}
             
            </div>
            <div className='view'>
              <button >all ads <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Property
