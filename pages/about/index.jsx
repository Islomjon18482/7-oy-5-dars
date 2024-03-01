import React from 'react'
import Layout from '@/components/Loyaut'
import "../styles/index.global.css"
import "./index.css"


export default function About() {
  return (
        <Layout>
            <div className="about">
              <div className="card__wrapper">
                <div className="card__heading">
                  <h2>Author’s Book Includes</h2>
                </div>
                <div className="cards">
                  <div className="card">
                    <div className="card__img">
                      <img src="./atomic.png"/>
                    </div>
                    <div className="card__text">
                      <h2>Atomic One’s</h2>
                      <p>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
                      <div className="static">
                        <div className="pages">
                          <h3>Pages:</h3>
                          <p>586pages</p>
                        </div>
                        <div className="length">
                          <h3>Length</h3>
                          <p>10 Hours</p>
                        </div>
                      </div>
                      <button>Order Today</button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card__img">
                      <img src="./atomic.png"/>
                    </div>
                    <div className="card__text">
                      <h2>Atomic One’s</h2>
                      <p>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
                      <div className="static">
                        <div className="pages">
                          <h3>Pages:</h3>
                          <p>586pages</p>
                        </div>
                        <div className="length">
                          <h3>Length</h3>
                          <p>10 Hours</p>
                        </div>
                      </div>
                      <button>Order Today</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__author">
                <div className="about__author__img">
                  <img src="./author.png"/>
                </div>
                <div className="about__author__text">
                  <h2>About Author</h2>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
                  <img src="./Details.png"/>
                </div>
              </div>
            </div>
        </Layout>
  )
}
