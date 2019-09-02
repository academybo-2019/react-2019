import React, { Component } from 'react';
import './index.css'
import Intro from './img/intro.jpg'

class index extends Component {
    render() {
        return (
            <div>
                <header className="site-headers">
                    <nav>
                        <div className="logo">
                            <h1>Modern Websites</h1>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </nav>
                    <section>
                        <div className="leftside">
                            <img src={Intro} alt="intro"/>
                        </div>
                        <div className="rightside">
                            <h1>OUR MODERN WEBSITE</h1>
                            <p>We are the Best Website Developer Company.</p>
                            <button>welcome</button>
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default index;