import React, { Component } from 'react';
import "./agendas.css";
import logo from './images/logo.png';

import axios from 'axios';

export default class AgendaList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Agenda: []
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/Agenda/')
            .then(response => {
                this.setState({ Agenda: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Agenda/')
            .then(response => {
                this.setState({ Agenda: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (

            
       <div className='container-fluid'>
            
             <div className='header2'>
                 <nav>
                  <a href="index.html"><img src={logo} alt="logo"/></a>
                  <div className="nav-links" id="nav-links">
                  <i className="fa fa-times" onclick="hideMenu()" />
                  <ul>
                     <li><a href="/home">HOME</a></li>
                     <li><a href="/about">ABOUT</a></li>   
                     <li><a href="/courses">COURSE</a></li> 
                     <li><a href="blog.html">BLOG</a></li> 
                     <li><a href="contact.html">CONTACT</a></li> 
                 </ul>
             </div>
          <i className="fa fa-bars" onclick="showMenu()" />
        </nav>
        <h1>Our Course</h1>

             </div>

             <div className='courses2'>
                   <h2>Courses We Offer</h2>
		                <p style={{marginLeft: '50px'}}>
		                   A paragraph is a group of related sentences that support one main idea.<br/>
	                       In general, paragraphs consist of three parts: the topic sentence.
	                    </p>
                         <div class = "row" style={{paddingLeft: '300px'}}>
		                      {this.state.Agenda.map(props =>
		                               <div className='course-col2'>
			                        
                                             <h3> { props.title }</h3>
                                             <h7><b>Description : </b> { props.description } months</h7><br/>
                                             <h7><b>status : </b>{ props.status } /=</h7><br/>
                                             <h7><b>Date : </b>{ props.date } /=</h7><br/>
	                                         <button class="button"><a href="/scourse" style={{textDecoration:'none',color:'white'}}>VIEW</a></button>
                                       </div>
                               )}
                            </div>



             </div>


           
            
           <section className="footer2">
                  <h4>About US</h4>
	              <p>A paragraph is a self-contained unit of discourse in writing dealing</p>
	              <div class="icons">
	                     <i class="fa fa-facebook"></i>
			             <i class="fa fa-twitter"></i>
			             <i class="fa fa-instagram"></i>
			             <i class="fa fa-linkedin"></i>
	             </div>
	 
	         <p>Made with <i class="fa fa-heart-o"></i> by kavishka dilshan</p>
           </section>

    </div>


      


        )
    }
}