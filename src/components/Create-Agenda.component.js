import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'

import "./admin.css";
import myprofile from './images/my.jpeg';


import Sidebar from "./sidebar";


import "react-datepicker/dist/react-datepicker.css";

export default class CreateAgenda extends Component {
    constructor(props) {
        super(props);


        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            status: '',
            date: '',
            Agenda: []
        }
    }


    onChangetitle(e) {
        this.setState({
            title: e.target.value
        })
    }

   

    onChangedescription(e) {
            this.setState({
                description: e.target.value
            })
        }
        
     onChangestatus(e) {
        this.setState({
            status: e.target.value
        })
    }

   

     onChangedate(e) {
        this.setState({
            date: e.target.value
        })
    }

   
    onSubmit(e) {
        e.preventDefault();

        const Agenda = {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status,
            date: this.state.date,
        }

        console.log(Agenda);

        axios.post('http://localhost:5000/Agenda/add', Agenda)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                description: "Agenda Successfully Added",
                status: "success",
                date: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });

        // window.location = '/create';

    }

    render() {
        return ( <div>

               <div className="home-section3">

                    <div>
                     <Sidebar/>
                     </div>

                   <nav>
                      <div className="sidebar-button">
                      <i className="bx bx-menu sidebarBtn" />
                      <span className="dashboard">Create Course</span>
                   </div>
   
                   <div className="profile-details">
                      <img src={myprofile} alt="myprofile"/>
                      <span className="admin_name">kavishka</span>
                      <i className="bx bx-chevron-down" />
                   </div>
                </nav>
              </div>

             
          <div className='Agendaform'>
             
            <h3  style={{marginLeft:'500px'}}> Create New Agenda </h3>
            <form onSubmit = { this.onSubmit } >

            
            <div className = "form-group">
            <label > title: </label> 
            <input type = "text"
            required className = "form-control"
            name = "title"
            placeholder = "title"
            value = { this.state.title }
            onChange = { this.onChangetitle }/> </div > 

            <div className = "form-group" >
            <label > description: </label> 
            <input type = "text"
            required className = "form-control"
            name = "description"
            placeholder = "Enter description"
            value = { this.state.description }
            onChange = { this.onChangedescription}/></div >

             <div className = "form-group" >
            <label > status: </label>
            <input type = "text"
            required className = "form-control"
            name = "status"
            placeholder = "Enter status"
            value = { this.state.status }
            onChange = { this.onChangestatus }/>
             </div >

            <div className = "form-group" >
            <label > date: </label> 
            <input type = "text"
            required className = "form-control"
            name = "date"
            placeholder = "Enter date"
            value = { this.state.date }
            onChange = { this.onChangedate }/> </div >

            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary"/>
            </div>
            
             </form >
             </div>
              

            </div>
        )
    }
}