import React from 'react'
import './style.css'
export default function index({Children}){
  return (
    <section className='container-filtro'>
        <ul>
            <li>{Children}</li>
        </ul>

        <button>Limpar tudo</button>
    </section>
  )
}

