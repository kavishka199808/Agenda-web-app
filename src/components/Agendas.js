import React, { Component } from 'react';
import "./agendas.css";


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
        <h1>BEACH CONCETR AGENDA</h1>

             </div>

             <div className='tablecontent'> 
                 <table  table class="table table-bordered">
                 <thead className = "thead-light" >
                <tr >
                   <th > Title </th> 
                   <th > Description </th> 
                   <th > Status </th>
                   <th> Time </th> 
                  
                 </tr >
            </thead> <tbody > {this.state.Agenda.map(props =>
                    <tr key = { props.title } >
                    <td > { props.title } </td> 
                    <td > { props.description } </td> 
                    <td > { props.status } </td> 
                    < td > { props.time } </td>
                   
                     </tr>)

            }

            </tbody> </table >
           
            
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