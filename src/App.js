import React from "react"
import Top from "../src/Top"
import Content from "../src/Content"
import Footer from "../src/Footer"

export default function App(){
    return (
        <div className="container">
            <Top/>
            <Content/>
            <Footer/>
        </div>
    )
}