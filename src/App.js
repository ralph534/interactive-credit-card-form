import React, {useState} from 'react'
import './App.css';
import IMG from './images/digitalLogo-removebg-preview.png'
import IMG2 from './images/cardchip-removebg-preview.png'
import IMG3 from './images/Bluecheck-removebg-preview.png'
import CreditCardForm from './CreditCardForm';
import Card from './Card';

function App() {

  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [expo, setExpo] = useState("");
  const [cvv, setCvv] = useState("");


  return (
  <div className="container">
    <section className="ui">
      <CreditCardForm/>
    </section>
  </div>
  );
}



export default App;
