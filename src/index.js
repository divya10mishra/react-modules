import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import Body from './Body'
import Carousel from './components/carousel'
import Sidebar from './components/MenuBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[{
            path:'/',
            element : <Body/>
        }, {
            path:'/carousel',
            element : <Carousel/>
        },
        {
            path:'/sidebar',
            element : <Sidebar/>
        }]
    },
   
])

const root = createRoot(document.getElementById("app"));


root.render(<RouterProvider router={appRouter}/>)