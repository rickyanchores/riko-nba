import React from 'react'

const Home = () => {
  return (
    <div className='Home w-screen min-h-screen grid justify-center items-center'>
        <h1 className='text-4xl'>riko NBA</h1>
        <div className="nba-container grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="nba-input bg-slate-600 flex justify-center items-center">
          <input type="text" className='inputField p-2 m-4' placeholder='insert name'/>
          <button className='btn p-4 bg-orange-600 m-4'>+</button>
        </div>
        <div className="nba-image bg-slate-600 w-[400px] p-4">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/240126222456-01-luka-doncic-012624.jpg?c=original" alt="player image" className="nba-image object-fit"/>
        </div>
        <div className="nba-stats bg-slate-600 p-4">
          <li>PTS:</li>
          <li>REB:</li>
          <li>AST:</li>
          <li>3PT</li>
          <li>INFO:</li>
        </div>
        <div className="nba-player-social bg-slate-600 p-4">
          <li>IG</li>
          <li>X</li>
          <li>YouTube</li>
        </div>
    </div>
        </div>

  )
}

export default Home;