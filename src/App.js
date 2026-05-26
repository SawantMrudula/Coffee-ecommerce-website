import React, {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Special from './components/Special';
import Product from './components/Product';
import Place from './components/Place';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';


function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }
    return (
  <>
    <Header />
    <main className="main">
      <Hero />
      <Special />
      <Product />
      <Place />
      <Blog />
      <Footer />
     
    </main>
    
    <div className="App">
        {
            currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Registration onFormSwitch={toggleForm}/>
        }
      </div>
    </>
  );
}

export default App;
