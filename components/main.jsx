import React from 'react'

export default function Main() {
  return (
    <div className='home__wrapper'>
        <div className="home__text">
            <p className='title'>Welcome to Pages</p>
            <h2>Books are uniquely
            portable magic </h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            <div className="btns">
                <button>Order Today</button>
                <a>Read Free Demo</a>
            </div>
        </div>
        <div className="home__img">
            <img src="./Book.png"/>
        </div>
    </div>
  )
}
