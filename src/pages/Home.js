// DevSync created by Minjae Jang

import React from 'react'

const Home = () => {
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img className='logoImg' src="/devsync.jpeg" alt="logo" />
            <h4 className='mainLabel'>
                Paste Invitation Room ID!
            </h4>
            <div className='inputGroup'>
                <input type="text" className='inputBox' placeholder='Room ID' />
                <input type="text" className='inputBox' placeholder='Username' />
                <button className='joinBtn'>Join</button>
                <span className='createInfo'>
                    If you don't have an invitation, create a &nbsp;
                    <a href="E" className='createNewBtn'>new room</a>
                </span>
            </div>
        </div>

        <footer>
            <h4>
                Created by <a href="https://minjae21.github.io/index.html" target='_blank' rel="noreferrer">Minjae Jang</a>
            </h4>
        </footer>
    </div>
  )
}

export default Home
