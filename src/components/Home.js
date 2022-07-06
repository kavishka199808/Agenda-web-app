import React, { Component } from 'react';
import "./home.css";
import logo from './images/logo.png';
import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';

export default class Home extends Component {

    render() {
        return ( 
           
            <div>
        <section className="header">
          <nav>

          <a href="index.html"><img src={logo} alt="logo"/></a>
            
            <div className="nav-links" id="nav-links">
              <i className="fa fa-times" onclick="hideMenu()" />
              <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>   
                <li><a href="/courses">COURSE</a></li> 
                <li><a href="/blog">BLOG</a></li> 
                <li><a href="/contact">CONTACT</a></li>
                <li><a href="/#">LOGIN</a></li>  
              </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()" />
          </nav>
          <div className="text-box">
            <h1>World's biggest Online Platform</h1>
            <p>
              A paragraph is a group of related sentences that support one main idea.<br />
              In general, paragraphs consist of three parts: the topic sentence.
            </p>
            <a href className="hero-btn">Visit Us To Know More</a>
          </div>
        </section>
        {/*  course --------- */}
        <section className="course">
          <h1 style={{marginLeft:'30px'}}>Courses We Offer</h1>
          <p>
            A paragraph is a group of related sentences that support one main idea.<br />
            In general, paragraphs consist of three parts: the topic sentence.
          </p>
          <div className="row" style={{marginLeft:'30px'}}>
            <div className="course-col">
              <h3>Programming</h3>
              <p>A paragraph is a self-contained unit of discourse in writing<br />
                dealing with a particular point or idea. A paragraph consists of
                one or more sentences. Though not required by the syntax of any <br />
                language, paragraphs are usually an expected part of formal
              </p>	
            </div>
            <div className="course-col">
              <h3>Web Developing</h3>
              <p>A paragraph is a self-contained unit of discourse in writing<br />
                dealing with a particular point or idea. A paragraph consists of
                one or more sentences. Though not required by the syntax of any <br />
                language, paragraphs are usually an expected part of formal
              </p>	
            </div>
            <div className="course-col">
              <h3>Ardino Programming</h3>
              <p>A paragraph is a self-contained unit of discourse in writing<br />
                dealing with a particular point or idea. A paragraph consists of
                one or more sentences. Though not required by the syntax of any <br />
                language, paragraphs are usually an expected part of formal
              </p>	
            </div>
          </div>
        </section>
        {/* -------Testimonoals----- */}
        <section className="testimonoals">
          <h1 style={{marginLeft:'30px'}}>What Our Student Says</h1>
          <p>A paragraph is a group of related sentences that support one main idea.<br />
            In general, paragraphs consist of three parts: the topic sentence.</p>
          <div className="row" style={{marginLeft:'200px'}}>
            <div className="testimonoals-col">
            <img src={user1} alt="user1"/>
              
              <div>
                <p>
                  A paragraph is a self-contained unit of discourse in writing<br />
                  dealing with a particular point or idea. A paragraph consists of
                </p>
                <h3>Kumari Perera</h3>
                <i className="fa fa-star" />  
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star-half-0" /> 
              </div>	
            </div>
            <div className="testimonoals-col">
            <img src={user2} alt="user1"/>
            
              <div>
                <p>
                  A paragraph is a self-contained unit of discourse in writing<br />
                  dealing with a particular point or idea. A paragraph consists of
                </p>
                <h3>Kavishka Dilshan</h3>
                <i className="fa fa-star" />  
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star" /> 
                <i className="fa fa-star-half-0" /> 
              </div>	
            </div>
          </div>
          <section>
            {/* --------Call to Action------ */}
            <section className="cta"style={{marginLeft:'150px'}}>
              <h1>Enroll for our various online course<br />Anywhere From the World</h1>
              <a href className="hero-btn">CONTACT US</a>
            </section>  
            {/* footer */}
            <section className="footerhome">
              <h4>About US</h4>
              <p>A paragraph is a self-contained unit of discourse in writing dealing</p>
              <div className="icons">
                <i className="fa fa-facebook" />
                <i className="fa fa-twitter" />
                <i className="fa fa-instagram" />
                <i className="fa fa-linkedin" />
              </div>
              <p>Made with <i className="fa fa-heart-o" /> by kavishka dilshan</p>
            </section>
          </section></section></div>
    
        );
    }
}