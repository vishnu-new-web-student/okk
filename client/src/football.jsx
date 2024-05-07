import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';

function Football() {

    
  const [ bor, setBor] = useState("2px solid white")

    const navigate = useNavigate();
  
  const handleclick = () =>{
    
    navigate("/")
    
    
    
  }
  
  const handleclickk = () =>{
    
    navigate("/kabaddi")
    
    
  }
  
  const handleclickF = () =>{
    
    navigate("/football")
    
    
  }
  
  const handleclickv = () =>{
    
    navigate("/Volleyball")
    
    
  }
  return (
    <>


<section id='navbar'>
        <div className="nav1">

          <img src="./img/img1.png.webp" alt="fail to load img 1" />

          <div className="icons"> <span className='icon' class="material-symbols-outlined">
            notifications_active
          </span>

            <span className='icon' class="material-symbols-outlined">
              account_balance_wallet
            </span>

          </div>

        </div>

        <div className="nav2"> <div className='icons' onClick={handleclick}>

          <span className='icon' class="material-symbols-outlined">
            sports_baseball
          </span> <h5 className='h-icon'>CRICKET</h5></div>

          <div className='icons' onClick={handleclickk}>
            <span className='icon' class="material-symbols-outlined">
              sports_kabaddi
            </span>
            <h5 className='h-icon'>Kabaddi</h5></div>

          <div className='icons' onClick={handleclickF}  style={{borderBottom:bor}}>

            <span className='icon' class="material-symbols-outlined">
              sports_soccer
            </span><h5 className='h-icon'>Football</h5></div>

          <div className='icons' onClick={handleclickv}>
            <span className='icon' id='volleyball' class="material-symbols-outlined">
              sports_volleyball
            </span><h5 className='h-icon '>VOLLEYBALL</h5></div>
        </div> </section>

        <h3>Upcoming Football Match</h3>

<div className="box">
  <div className="line-first"> <div className="l-name">ECS T10 Portugal </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img1"></div>
    <div className="team-name-sort sort1">MI-r</div>

    <div className="time1">01:30AM</div>
  
    <div className="team-name-sort sort2">RR-r</div>
    <div className="log-img img2"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Mumbai Indians</div>
  <div className="full2">Rajasthan Royals</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹3.2 Crores
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>





<div className="box">
  <div className="line-first"> <div className="l-name">ECS T10 Portugal </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img1"></div>
    <div className="team-name-sort sort1">MI-r</div>

    <div className="time1">01:30AM</div>
  
    <div className="team-name-sort sort2">RR-r</div>
    <div className="log-img img2"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Mumbai Indians</div>
  <div className="full2">Rajasthan Royals</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹3.2 Crores
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>




<div className="box">
  <div className="line-first"> <div className="l-name">ECS T10 Portugal </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img1"></div>
    <div className="team-name-sort sort1">MI-r</div>

    <div className="time1">01:30AM</div>
  
    <div className="team-name-sort sort2">RR-r</div>
    <div className="log-img img2"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Mumbai Indians</div>
  <div className="full2">Rajasthan Royals</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹3.2 Crores
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>



<div className="box">
  <div className="line-first"> <div className="l-name">ECS T10 Portugal </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img1"></div>
    <div className="team-name-sort sort1">MI-r</div>

    <div className="time1">01:30AM</div>
  
    <div className="team-name-sort sort2">RR-r</div>
    <div className="log-img img2"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Mumbai Indians</div>
  <div className="full2">Rajasthan Royals</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹3.2 Crores
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
</div>
</div>



<div className="box">
  <div className="line-first"> <div className="l-name">ECS T10 Portugal </div>
    
    <span id='cloth-icon' class="material-symbols-outlined">
      apparel
    </span>
  </div>


  <div className="line-sec">
    <div className="log-img img1"></div>
    <div className="team-name-sort sort1">MI-r</div>

    <div className="time1">01:30AM</div>
  
    <div className="team-name-sort sort2">RR-r</div>
    <div className="log-img img2"></div>
  </div>
<div className="team-name-full">
  <div className="full1">Mumbai Indians</div>
  <div className="full2">Rajasthan Royals</div>
</div>

<div className="box-line"></div>


<div className="box-last">
  <div className="mega-price"> <div className="mega">MEGA</div> 
  <div className="price">₹3.2 Crores
</div>
</div>
<div className="bell"><span class="material-symbols-outlined">
notification_add
</span></div>
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

export default Football