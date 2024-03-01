import React from 'react'
import Layout from '@/components/Loyaut'
import "./index.css"

export default function Contact() {
  return (
    <Layout>
        <div className="contact__wrapper">
            <div className="contact__top__wrapper">
                <div className="contact__heading">
                    <h2>What will you learn?</h2>
                </div>
                <div className="contact__table">
                    <div className="row">
                        <div className="colum">
                            <div className="colum__card">
                                <h3>01</h3>
                                <p>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
                            </div>
                            <div className="colum__card">
                                <h3>03</h3>
                                <p>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
                            </div>
                        </div>
                        <div className="colum">
                            <div className="colum__card">
                                <h3>02</h3>
                                <p>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
                            </div>
                            <div className="colum__card">
                                <h3>04</h3>
                                <p>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__img">
                        <img src="./Image.png"/>
                    </div>
                </div>
            </div>
            <div className="chapter">
                <div className="chapter__heding">
                    <h2>The Chapter Includes</h2>
                </div>
                <div className="chapter__cards">
                    <div className="chapter__colum">
                        <div className="chapter__row">
                            <h2>Chapter- 01   Get Started Intro</h2>
                            <p className='desc'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
                            <div className="status">
                                <div className="pages">
                                    <h3>Pages :</h3>
                                    <p>85pages</p>
                                </div>
                                <div className="length">
                                    <h3>Length :</h3>
                                    <p>1 Hour 15 mins</p>
                                </div>
                            </div>
                        </div>
                        <div className="chapter__row">
                        <h2>Chapter- 01   Get Started Intro</h2>
                            <p className='desc'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
                            <div className="status">
                                <div className="pages">
                                    <h3>Pages :</h3>
                                    <p>85pages</p>
                                </div>
                                <div className="length">
                                    <h3>Length :</h3>
                                    <p>1 Hour 15 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chapter__colum">
                        <div className="chapter__row">
                        <h2>Chapter- 01   Get Started Intro</h2>
                            <p className='desc'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
                            <div className="status">
                                <div className="pages">
                                    <h3>Pages :</h3>
                                    <p>85pages</p>
                                </div>
                                <div className="length">
                                    <h3>Length :</h3>
                                    <p>1 Hour 15 mins</p>
                                </div>
                            </div>
                        </div>
                        <div className="chapter__row">
                        <h2>Chapter- 01   Get Started Intro</h2>
                            <p className='desc'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
                            <div className="status">
                                <div className="pages">
                                    <h3>Pages :</h3>
                                    <p>85pages</p>
                                </div>
                                <div className="length">
                                    <h3>Length :</h3>
                                    <p>1 Hour 15 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
