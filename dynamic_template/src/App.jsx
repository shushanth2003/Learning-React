import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const greet="welcome to the new blog!";
const likes=50;
const nametag={name:"hello",team:"ninja"};

  return (
    <>
      <div className="content">
        <h1>{greet}</h1>
        <p>Liked {likes} times</p>
        <p>{nametag.name}, {nametag.team}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.floor(Math.random()*20+1)}</p>
      </div>
    </>
  )
}

export default App
