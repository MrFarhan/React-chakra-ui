import React from 'react'
import "./Layout.css"
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="LayoutContainer">
            <Navbar />
            <div>{children}</div>
            <div> Footer here
            </div>
        </div>
    )
}

export default Layout
