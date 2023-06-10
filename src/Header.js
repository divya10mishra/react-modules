import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
  return <> 
  <header  style={{
    color:'#FC4445',
    fontWeight:'bold',
    fontSize:'20px',
    padding:'20px',
    boxShadow: 'inset 5em 1em #FBEEC1'
  }}>
    <div>NavBar</div>
    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <li><Link to='/carousel'>Carousel</Link></li>
    <li><Link to='/sidebar'>Sidebar</Link></li>
    </ul>
  </header>
 
  </>
}

export default Header