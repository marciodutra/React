import React from 'react'
import CFB from './imgs/cfb.jpg'

export default function Header(){
    return(
        <header>
            <img src={CFB}/>
            <h1>CFB Cursos</h1>
        </header>
    )
}