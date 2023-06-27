import '../App.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'



function Home(){

    return(
        <div>
            <h1 style={{fontSize:`8rem`, paddingTop: `10rem`}}>Everything Star Wars.</h1>
            <Button className='my-5' href='/films'>Click here to get started.</Button>
        </div>
    )
}

export default Home