 import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { useDispatch } from 'react-redux';
import { add} from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';
import { useSelector } from 'react-redux';
 import StatusCode from '../utils/StatusCode';


function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);
   
  
  
 // const [products, getProducts] = useState([]); // Corrected variable name

  useEffect(() => {

    //dispatch an action to fetch products
    dispatch(getProducts());
    //fetch('https://fakestoreapi.com/products')
      //.then(data => data.json())
      //.then(result=> getProducts(result))
      
  }, []);
  if (status === StatusCode.LOADING) {
    return <p>Loading....</p>
  }
  if (status === StatusCode.ERROR) {
    return <p>Something went wrong! Try again later</p>
  }

  const addToCart = (product) => {
    //dispatch an add action so need useDispatch
    dispatch(add(product));
  }
  return (
    <>
       <h1
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  Product Dashboard
</h1>
      <div className="row">
   {products.map(product => (
  <div className="col-md-3" key={product.id}>
    <Card style={{ width: '18rem', height: '100%', marginBottom: '20px' }}>
      <div className="text-center"></div>
      <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR: ${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={()=>addToCart(product)}>Add To cart</Button>
      </Card.Footer>
    </Card>
  </div>
))}

      </div>
    </>
  );
}

export default Product;
