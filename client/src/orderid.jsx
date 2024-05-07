
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Orderid() {
 


  

  return (
    <>
<div className="payment-nav card-navbar">
        <img id='payment-img' src="./img/img1.png.webp" alt="fail to load img 1" />
        <h3 id='payment-heading'> Prime Membership</h3>
      </div>



<div className="user-box">
    <div className="user-id-box">  <div className="user-id">User-ID</div>  <div className="user-number">DREAM11@9948</div></div>
    <div className="user-id-box">  <div className="user-id">Password</div>  <div className="user-number">87002313</div></div>
</div>


<h1 id='note-heading'>NOTE   send User-ID and Password on whatsapp To your Admin</h1>

      <div className="debit-footer">
        <img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
        <h3 id='footer-heading'>
          100% Safe and Secure
        </h3>

      </div>

    </>
  )
}

export default Orderid