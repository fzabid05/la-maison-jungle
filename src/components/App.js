import { useState } from 'react'
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import '../styles/Layout.css'

function App() {
  const [cart, setUpdateCart] = useState([]);
  return (
    <div>
      <Banner />
      
      <div className='lmj-layout-inner'>
				<Cart cart={cart} setUpdateCart={setUpdateCart} />
				<ShoppingList cart={cart} setUpdateCart={setUpdateCart} />
			</div>
      <Footer />
    </div>
  );
}

export default App;
