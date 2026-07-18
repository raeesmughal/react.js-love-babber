import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import RouteParam from './components/Student'
import Student from './components/Student'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            <Navbar />
            <Home />
        </div>
    },

    {
        path: '/about',
        element: <div>
            <Navbar />
            <About />
        </div>
    },
    {
        path: '/dashboard',
        element: <div>
            <Navbar />
            <Dashboard />
        </div>
    },
    {
        path: '/student/:id',
        element: <div>
            <Navbar />
            <Student />
        </div>
    },

])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App