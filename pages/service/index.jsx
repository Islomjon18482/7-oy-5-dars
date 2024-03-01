import React from 'react'
import Layout from '@/components/Loyaut'
import "./index.css"

export default function Servise() {
  return (
    <Layout>
        <div className="service__wrapper">
            <div className="brands">
                <div className="service__heading">
                    <h2>Trusted by the Best</h2>
                </div>
                <div className="brands__cards">
                    <div className="brands__card">
                        <img src="./amazon.png" alt="" />
                        <h2>Amazen Corp</h2>
                        <p>A long established fact that a who looking at its layout.</p>
                    </div>
                    <div className="brands__card">
                        <img src="./amazon.png" alt="" />
                        <h2>Megan Books</h2>
                        <p>A long established fact that a who looking at its layout.</p>
                    </div>
                    <div className="brands__card">
                        <img src="./amazon.png" alt="" />
                        <h2>Los Books</h2>
                        <p>A long established fact that a who looking at its layout.</p>
                    </div>
                    <div className="brands__card">
                        <img src="./amazon.png" alt="" />
                        <h2>Urban Lib</h2>
                        <p>A long established fact that a who looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className="service__footer">
                <div className="service__footer__text">
                    <h2>Get Book Copy Today!</h2>
                    <p>This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.</p>
                    <button>Order Today</button>
                </div>
                <div className="service__footer__img">
                    <img src="./Photo.png"/>
                </div>
            </div>
            <div className="read">
                <div className="read__content">
                    <h2>Read a free chapter</h2>
                    <p>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
                    <div className="send">
                        <input placeholder='Your Email id...' type="text" /> <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
