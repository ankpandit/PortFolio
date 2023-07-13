import React from 'react'
import './Services.css'  ;
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card" ;
import Resume from './Updated-Resume.pdf' ;

export default function Services() {
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/>
                dignissimos, nobis aperiam laborum, maiores tempore optio 
            </span>
            <a href={Resume} download>
              <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur" style={{background:' rgb(179, 255, 255)'}}></div>
        </div>

        {/* right side */}
        <div className="cards">
          
          <div style={{left:'14rem'}}>
            <Card   
            emoji={HeartEmoji} 
            heading ={"Design"} 
            detail={"Figma, Abode , Adobe XD"}></Card> 
          </div>

          <div style={{left:'-8rem',top:'8rem '}}>
            <Card   
            emoji={Glasses} 
            heading ={"Developer"} 
            detail={"HTML, CSS, JavaScript ,React"}></Card> 
          </div>
          <div style={{left:'14rem',top:'18rem '}}>
            <Card   
            emoji={Humble} 
            heading ={"UI/UX"} 
            detail={"kuch bhi likh rha hun"}></Card> 
          </div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

        </div>
    </div>

  )
}
