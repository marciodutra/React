import React from 'react'

import Relogio from './componentes/Relogio'

import './App.css'

export default function App(){
        const textoDestaque={
          color:'#00f',
          fontSize:'3em'
        }
  return(
    <>
    <section className='caixa'>
      <Relogio/>
      <h1 style={{color:'#f00', fontSize:'5em'}}>CFB Cursos</h1>
      <h2 style={textoDestaque}>Curso de React</h2>
      <p className='texto'>Se inscreva no canal e nos siga no Instagram</p>
      <a href='https://www.youtube.com/cfbcursos' target='_blanck'>CFB Cursos</a>
      </section>
    </>
  )
}


