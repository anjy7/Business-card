import React from "react"


export default function Content() {
    return (
        <div>
          <div className="part1">
            <h1 className="name">Anjy Gupta</h1>
            <h3 className="role">Frontend Developer</h3>
            <a className="web-link" >AnjyG.dev</a>
             <div className="btns">
                <button className="email">Email</button>
                <button className="linkedin">Linkedin</button>
             </div>
          </div>
          <div className="part2">
            <h1 className="heading" >About</h1>
            <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            <h1 className="heading">Interests</h1>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
     </div>
    )
}
