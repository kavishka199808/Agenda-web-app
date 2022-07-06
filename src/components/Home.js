import React, { Component } from 'react';
import "./home.css";

import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';

export default class Home extends Component {

    render() {
        return ( 
           
            <div>
        <section className="header">
          <nav>

          
            
            <div className="nav-links" id="nav-links">
              <i className="fa fa-times" onclick="hideMenu()" />
              <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/agendas">AGENDAS</a></li> 
                <li><a href="/contact">CONTACT</a></li>
                <li><a href="/">LOGIN</a></li>  
              </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()" />
          </nav>
          <div className="text-box">
            <h1>World's Biggest Events Management Platform</h1>
            <p>
                We consistently provide the highest level of event planning, production, lighting, audio, and video services.<br/>
                 We love producing experiential concerts, trade shows, corporate events, sporting events, movie premiers, and more
            </p>
            <a href className="hero-btn">Visit Us To Know More</a>
          </div>
        </section>
        {/*  course --------- */}
        <section className="course">
          <h1 style={{marginLeft:'30px'}}>Current Events We Offer</h1>
          <p>
                We consistently provide the highest level of event planning, production, lighting, audio, and video services.<br/>
                 We love producing experiential concerts, trade shows, corporate events, sporting events, movie premiers, and more
          </p>
          <div className="row" style={{marginLeft:'30px'}}>
            
            <div className="course-col">
              <h3>BEACH CONCETR</h3> 
              <p>A paragraph is a self-contained unit of discourse in writing<br />
                dealing with a particular point or idea. A paragraph consists of
                one or more sentences. Though not required by the syntax of any <br />
                language, paragraphs are usually an expected part of formal
              </p>	
            <a href="/agendas"><button type="button" class="btn btn-info btn-lg">See more</button></a>
            </div>
            
            <div className="course-col">
              <h3>MRS FINALS</h3>
              <p>A paragraph is a self-contained unit of discourse in writing<br />
                dealing with a particular point or idea. A paragraph consists of
                one or more sentences. Though not required by the syntax of any <br />
                language, paragraphs are usually an expected part of formal
              </p>
              <a href="#"><button type="button" class="btn btn-info btn-lg">See more</button></a>	
            </div>
            <div className="course-col">
              <h3>STATE AWARDS</h3>
              <p>A paragraph is a self-contained unit of discourse in writing<br />
                dealing with a particular point or idea. A paragraph consists of
                one or more sentences. Though not required by the syntax of any <br />
                language, paragraphs are usually an expected part of formal
              </p>
              <a href="#"><button type="button" class="btn btn-info btn-lg">See more</button></a>	
            </div>
          </div>
        </section>
        {/* -------Testimonoals----- */}
        <section className="testimonoals">
          <h1 style={{marginLeft:'30px'}}>What Our client Says</h1>
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
                <h3>MIS.Kumari Perera(S.E.O of DERANA TV)</h3>
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
                <h3>MR.Kavishka Dilshan(PRESIDENT OF HIRU TV)</h3>
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
              <h1>Creativity is Everywhere<br />DON'T HASITATE AND TALK TO US?</h1>
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