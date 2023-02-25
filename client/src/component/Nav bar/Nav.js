import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const[show, setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100) setShow(true);
            else setShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll", ()=>{});
        };
    },[]);
  return (
    <div className={`nav ${(show && "nav__black")}`}>
        <img className='
        nav__logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Nav-logo" />
        <img className='
        nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar-logo" />
    </div>
  )
}

export default Nav;