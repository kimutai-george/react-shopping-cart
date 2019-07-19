import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import { useState,render } from 'react';




const Cart = ({ items, total, currency, removeFromCart }) => {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <h3>My Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">No Items Selected</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                        <>
        <Button variant="primary" onClick={handleShow}>
          Check Out
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">No Items Selected</div>
                        )}
                        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
                            
                    </div>
                </div>
                
          </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
