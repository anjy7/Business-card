import React from "react"
import Top from "./Top"
import Content from "./Content"
import Footer from "./Footer"

export default function App(){
    return (
        <div className="container">
            <Top/>
            <Content/>
            <Footer/>
        </div>
    )
}