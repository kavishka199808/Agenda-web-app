import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

import "./admin.css";
import myprofile from './images/my.jpeg';


import Sidebar from "./sidebar";


export default class EditAgenda extends Component {
    constructor(props) {
        super(props);

        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onChangetime = this.onChangetime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            status: '',
            time: '',
            Agenda: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Agenda/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    status: response.data.status,
                    time: response.data.time,
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Agenda/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Agenda: response.data.map(Agenda => Agenda.title),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

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

   

    onChangetime(e) {
        this.setState({
            time: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const Agenda = {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status,
            time: this.state.time,
        }


        console.log(Agenda);

        axios.post('http://localhost:5000/Agenda/update/'+this.props.match.params.id,Agenda)
        .then(res => console.log(res.data));

        swal({
                title: "Done!",
                text: "Agenda Successfully Update",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });

    }

    render() {
        return ( <div >

        
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
                       
            <h3 style={{marginLeft:'300px'}} > Edit Agenda </h3> <form onSubmit = { this.onSubmit } >
                
            <div className = "form-group" style = { { marginBottom: '15px' }} >
            <label >  Title: </label> 
            <input type = "text"
            required className = "form-control"
            name = "title:"
            placeholder = "Enter Title:"
            value = { this.state.title }
            onChange = { this.onChangetitle }/> </div > 
            <div className = "form-group" >

            <label >  Description: </label> 
            <input type = "text"
            required className = "form-control"
            name = "description"
            placeholder = "Enter description"
            value = { this.state.description }
            onChange = { this.onChangedescription }/></div >

             <div className = "form-group" >
            <label >  Status:  </label>
            <input type = "text"
            required className = "form-control"
            name = "status"
            placeholder = "Enter status"
            value = { this.state.status }
            onChange = { this.onChangestatus }/>
             </div >

            <div className = "form-group" >
            <label > Time: </label> 
            <input type = "time"
            required className = "form-control"
            name = "Time:"
            placeholder = "Enter time"
            value = { this.state.time }
            onChange = { this.onChangetime }/> </div >
            
            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary"/>
            </div>
            
             </form ></div></div>
        )
    }
}