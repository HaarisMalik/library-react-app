import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { books } from './data';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem) {
      setCart(cart.map(item => {
      if  (item.id === dupeItem.id) {
         return {
          ...item,
          quantity: item.quantity + 1,
         }
      }
      }))
    }
    
    setCart([...cart, {...book, quantity: 1}])
  }
  
  useEffect(() => {

  }, [cart])

  return (
    <Router>
    <div className="App">
     <Nav/>
     <Route path="/" exact component={Home} />
     <Route path="/books" exact render={() => <Books books={books} /> } />
     <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} /> } />
     <Route path="/cart" render={() => <Cart books={books} /> } />
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
