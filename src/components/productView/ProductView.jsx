import React from 'react'
import './productview.css'
// import { useDispatch } from 'react-redux'

import { useGetAllProductsQuery } from '../../features/productsApi'
// import { addToCart } from '../../features/cartSlice'
import { useParams } from 'react-router'
// import { useState } from 'react'

export default function ProductView() {
    
    const {data, error, isLoading} = useGetAllProductsQuery()
    // const dispatch = useDispatch();
    const params = useParams();
    // const [details,setDetails] = useState([])

    console.log(params.id);

    // const handleAddToCart = (product) => {
    //     dispatch (addToCart(product))
    // }

    // const viewproduct = data.find(item=>item.id == params.id)
    // console.log(viewproduct);

  return (
    <div className='container'>
       {isLoading ? (<p>loading....</p>
       ) : error ? (<p>An Error Occured!!</p>
       ) :(<>

       {/* {data?.find((product) => {
        return product.id !== params.id ? <p>Sorry</p> : product
       }).map((product) => {
        return <h1>{product.description}</h1>
       })
       
       
       } */}
       
       </>)}
    </div>
  )
}
