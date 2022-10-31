import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {

  return (
    
    <div className='nav-center'>
        
        <Link className='homeLink' to='/home'>Home</Link>

        <Link className='starshipLink' to='/starshipslist'>Starships</Link>
         
        <Link className='planetLink' to='/planets'>Planets</Link>
          
        <Link className='filmLink' to='/films'>Films</Link>
          
      </div>
  )} 