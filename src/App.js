    
import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom'



const App = () => {
    return (
        <Router>
        <div className="container">
            <Nav/>
            <div className="row">
                <div className="col-md-12">
                    <h1>Computer Accessories Shop</h1>
                </div>
            </div>
            <div className="row">
           
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                   Computer Shop &copy; 
                  
                    
                        
                     
                </small>
            </footer>
        </div>
        </Router>
    );
}

export default App;