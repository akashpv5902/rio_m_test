import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
// import { Link } from 'react-router-dom';




import { useGetAllProductsQuery } from '../../features/productsApi';
import './items.css'
import { useState } from 'react';

export default function Items() {

  const { data, error, isLoading } = useGetAllProductsQuery()
  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    //    navigate to cart
  }

  const [searchTerm,setSearchTerm] = useState("")
  const [category,setCategory] = useState("")




  return (
    <div className='container'>
      {isLoading ? (<p>loading...</p>
      ) : error ? (<p>An error occured!!</p>
      ) : (<>

        <Row>
          <input
          className='input_box'
          type="text"
          placeholder='Search...'
          onChange={(event)=>{
            setSearchTerm(event.target.value);
            console.log(searchTerm)
          }}
          />

          <div className='cat_buttons'>
            <button onClick={()=>{
              setCategory("")
            }} className='cat_button'>All</button>
            <button onClick={()=>{
              setCategory("men's clothing")
            }}  className='cat_button'>Men's Clothing</button>
            <button onClick={()=>{
              setCategory("women's clothing")
            }}  className='cat_button'>Women's Clothing</button>
            <button onClick={()=>{
              setCategory("jewelery")
            }} className='cat_button'>Jewelery</button>
            <button onClick={()=>{
              setCategory("electronics")
            }} className='cat_button'>Electronics</button>


          </div>









          {data?.filter((product)=>{
            return category === "" ? product : product.category.includes(category)
          }).filter((product)=>{
            return searchTerm.toLowerCase() === '' ? product : product.title.toLowerCase().includes(searchTerm)
           
          }).map(product =>
            <Col>
              <div className="col-sm-5">
                
                <Card className='me-3' id='cd' style={{ width: '18rem' }} key={product.id}>
                  <h3>{product.name}</h3>
                  <Card.Img variant="top" width="200px" height="200px" src={product.image} />
                  <Card.Body>
                    <Card.Title className='card_text'>{product.title}</Card.Title>
                    <Card.Title className='card_text'>${product.price}</Card.Title>
                    <Card.Text className='card_text'>
                      Some quick example text to build on the card title
                      {product.category}
                    </Card.Text>
                    <Button onClick={() => handleAddToCart(product)} variant="warning">Add to cart</Button>
                  </Card.Body>
                </Card>
                
              </div>
            </Col>
          )}

        </Row>


      </>)






      }





    </div>
  )
}


