import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Pay() {


  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className="payment-nav">
        <img id='payment-img' src="./img/img1.png.webp" alt="fail to load img 1" />
        <h3 id='payment-heading'>Payment Option</h3>
      </div>

      <div className="main-payment-box">

      <div className="payment-option-box">
        <div className="card-logo"><span class="material-symbols-outlined">
          credit_card
        </span> 

        <h5 id='c-heading'>DEIT/CREDIT CARDS</h5>
        
        </div>

        <a id='pay' href="/Prime-Membership">Pay</a>
        </div>



        <div className="payment-option-box">
        <div className="card-logo"> <span class="material-symbols-outlined">
account_balance
</span>

        <h5 id='c-heading'>NET BANKING</h5>
        
        </div>

        <a id='pay' href="/Prime-Membership">Pay</a>
        </div>

        </div>


        <div className="main-upi-box">

        <p id='upi'>UPI</p>
<div className="upi-box">
  
<div className="upi-payment-box">
  <img src="./img/img6.png" alt="phone pe" />
  <h5 id='upi-heading'>Phone Pe</h5>
</div>
<a id='pay' href="/Prime-Membership">Pay</a>


</div>





<div className="upi-box">
  
<div className="upi-payment-box">
  <img src="./img/img7.png" alt="Google pay" />
  <h5 id='upi-heading'>Google pay</h5>
</div>
<a id='pay' href="/Prime-Membership">Pay</a>


</div>


<div className="upi-box">
  
<div className="upi-payment-box">
  <img src="./img/img8.png" alt="Amzon pay" />
  <h5 id='upi-heading'>Amzon pay</h5>
</div>
<a id='pay' href="/Prime-Membership">Pay</a>

</div>

</div>






      <div className="footer">
        <img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
        <h3 id='footer-heading'>
          100% Safe and Secure
        </h3>

      </div>
    </>
  )
}

export default Pay
