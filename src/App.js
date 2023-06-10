import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'


function App() {
    return (
        <div style={{
            margin:'0'
        }}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}



export default App
