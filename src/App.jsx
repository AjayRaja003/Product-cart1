import React, { useState } from 'react';
import Card from './components/Card';
import Navi from './components/Navi';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [cartValue, setCartValue] = useState(0);
  return (
    <>
    <Navi cartValue={cartValue} />
    <Header />
    <section>
      <div className="container">
        <div className="row">
          <Card setCartValue={setCartValue}></Card>
        </div>
      </div>
    <Footer />
    </section>
  </>
);
}



export default App;