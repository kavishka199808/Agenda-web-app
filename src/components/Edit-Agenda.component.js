import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'
import Agenda from '../../backend/models/Agenda.model';



export default class EditAgenda extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/Agenda/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    status: response.data.status,
                    date: response.data.date,
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
            Duration: e.target.value
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

         <div className="home-section4">
            
           
            <div className='editeform'>
                       
            <h3 > Edit Agenda </h3> <form onSubmit = { this.onSubmit } >
                
            <div className = "form-group" style = { { marginBottom: '15px' }} >
            <label >  title: </label> 
            <input type = "text"
            required className = "form-control"
            name = "title:"
            placeholder = "title:"
            value = { this.state.title }
            onChange = { this.onChangetitle }/> </div > 
            <div className = "form-group" >

            <label >  description: </label> 
            <input type = "text"
            required className = "form-control"
            name = "description"
            placeholder = "Enter description"
            value = { this.state.description }
            onChange = { this.onChangedescription }/></div >

             <div className = "form-group" >
            <label >  status:  </label>
            <input type = "number"
            required className = "form-control"
            name = "status"
            placeholder = "Enter status"
            value = { this.state.status }
            onChange = { this.onChangestatus }/>
             </div >

            <div className = "form-group" >
            <label > date: </label> 
            <input type = "number"
            required className = "form-control"
            name = "date:"
            placeholder = "Enter date"
            value = { this.state.date }
            onChange = { this.onChangedate }/> </div >
            
            <div className = "form-group" >
            <input type = "submit"
            value = "Update"
            className = "btn btn-primary"/>
            </div>
            
             </form ></div></div> </div>
        )
    }
}