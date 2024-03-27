import React, {useState} from 'react'
import IMG from './images/digitalLogo-removebg-preview.png'
import IMG2 from './images/cardchip-removebg-preview.png'
import IMG3 from './images/Bluecheck-removebg-preview.png'
import './CardForm.css'
import Card from './Card'
import {format} from "date-fns"

function CreditCardForm() {

    const [confirmed, setConfirmed] = useState(false);
    const [name, setName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [expo, setExpo] = useState("01/24");
    const [cvv, setCvv] = useState("");



  return (
    <><div className="card">
          <div className="creditcard">
              <img src={IMG} className="digital" alt="digital" />
              <div className="information">
                  <div className="card_number">
                      <div className="number_v1">
                          {cardNum}
                      </div>
                  </div>
                  <div className="card_holder">
                      <label>Holder:</label>
                      <div className="name_v1">{name}</div>
                  </div>
                  <div className="card_info">
                      <div className="card_nfo_left">
                          <label>expiry:</label>
                          <div className="expiration">{format(new Date(expo), "MM/yy")}</div>
                      </div>
                      <div className="card_info_right">
                          <label>cvv:</label>
                          <div className="cvv">{cvv}</div>
                      </div>
                  </div>
              </div>
              <img src={IMG2} className="chip" alt="chip"></img>
          </div>
      </div>
      <div className="credit_card_form">
              {!confirmed && (<form className="card_form">
                  <div className="number_container">
                      <label>Card Number: </label>
                      <input className="card_numbers" type='text' value={cardNum
                          .replace(/\s/g, "")
                          .replace(/(\d{4})/g, "$1 ")
                          .trim()} onChange={(e) => setCardNum(e.target.value)} name="card_numbers" maxLength={19} placeholder='1234 5678 9101 1121' required></input>
                  </div>
                  <div className="name_container">
                      <label>Holder: </label>
                      <input className="card_name" type="text" value={name} onChange={(e) => setName(e.target.value)} name="card_name" maxLength={25} placeholder='John Doe' required></input>
                  </div>
                  <div className="expo_cvv_container">
                      <div className="input_expiration">
                          <label htmlFor='expiry_date' className="input_valid-thru">Ex. Date (MM/YY):</label>
                          <input className="expir_info" type="month" onChange={(e) => setExpo(e.target.value)} name="card_info" maxLength={5} placeholder='MM/YY' required
                          value={expo}></input>
                      </div>
                      <div className="input_cvv">
                          <label>CVV: </label>
                          <input className="cvv_info" type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} name="cvv_info" maxLength={4} placeholder='1234' required></input>
                      </div>
                  </div>
                  <input className="add" onClick={() => setConfirmed(true)} type="submit"></input>
              </form>)}
              {confirmed && <ThankYou setConfirmed={setConfirmed} />}
          </div>
          </>
    
  )
}


const ThankYou = ({setConfirmed}) => {
    return (
        <div className="completed">
            <img src={IMG3} alt="Completed" className="logo"/>
            <h2 className="thankyou">Thank You!</h2> 
            <p className="message">We've added your card details!</p>
            <button className="continue" onClick = {() => setConfirmed(false)}>Continue</button>
        </div>  
    )
}

export default CreditCardForm