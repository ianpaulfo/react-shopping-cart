import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from "./contexts/ProductContext";


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(
		localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
		);

		useEffect(() => {
			localStorage.setItem("cart", JSON.stringify(cart));
		}, [cart]);
	
	const [empty] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);

	};

	return (
		<div className="App">
	     <ProductContext.Provider value={{ products, addItem }}>

			<Navigation cart={cart} />

			{/* Routes */}
			<Route path="/cart" component={ShoppingCart} />
    
        <Route exact path="/" component={Products} />
		</ProductContext.Provider>
		</div>
	);
}

export default App;
