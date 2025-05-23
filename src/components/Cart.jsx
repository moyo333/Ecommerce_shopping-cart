 import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { remove } from '../store/CartSlice';

function Cart() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
      <div className="row">
        {products.map(product => (
          <div className="col-md-12" key={product.id}>
            <Card style={{ width: '18rem', height: '100%', marginBottom: '20px' }}>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  INR: ${product.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" onClick={() => removeToCart(product.id)}>
                  Remove Item
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
