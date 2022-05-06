import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const {id ,title , image, price, category} = product
        return (
            <div className='ui twelve wide mobile four wide computer  column ' >
                <Link to={`product/${id}`}>
                  <div className='ui fluid  cards'>
                      <div className='card'>
                          <div className='image'>
                              <img src={image}  alt={title}/>
                          </div>
                          <div className='content'>
                              <div className='header'>{title}</div>
                              <div className='meta price'>$ {price}</div>
                              <div className='meta'>{category}</div>
                          </div>
                      </div>
                  </div>
                </Link>
            </div>
        
        )
    })
    return (
        <>{renderList}</>
  )
}


export default ProductComponent