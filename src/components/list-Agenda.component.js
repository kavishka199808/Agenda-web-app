import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./admin.css";
import myprofile from './images/my.jpeg';

import Sidebar from "./sidebar";







const Agenda = props => ( <tr >
    <td > { props.Agenda.title } </td> 
    <td > { props.Agenda.description } </td>
    <td > { props.Agenda.status } </td> 
    <td > { props.Agenda.time } </td> 
  
    <td ><Link to = { "/edit/" + props.Agenda._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteAgenda(props.TimeTable._id) }}>Delete</a > </td > 
    </tr> 
)

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


    deleteAgenda(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Agenda/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Agenda: this.state.Agenda.filter((el) => el._id !== id),
            });
        }
    }


    AgendaList() {
        return this.state.Agenda.map(currentAgenda => {
            return <Agenda Agenda = { currentAgenda }
            deleteAgenda = { this.deleteAgenda }
            key = { currentAgenda._id }
            />;
        })
    }

    //Search

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Agenda/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.title.includes(searchKey)
            )

            this.setState({ Agenda: result })

        });

    }

    

    render() {return (
         <div className = "container-fluid" >
            
            <div>
              <Sidebar/>
             </div>
             
             <section className="home-section">
              
             <nav>
                <div className="sidebar-button">
                  <i className="bx bx-menu sidebarBtn" />
                  <span className="dashboard">Agenda</span>
                </div>
                <div className="search-box">
                  <input type="text" placeholder="Search..." onChange = { this.handleSearchArea }></input>
                  <i className="bx bx-search" />
                </div>
                <div className="profile-details">
                  <img src={myprofile} alt="myprofile"/>
                  <span className="admin_name">kavishka</span>
                  <i className="bx bx-chevron-down" />
                </div>
              </nav>

              <div className='tablecontent'> 
                 <table  table class="table table-bordered">
                 <thead className = "thead-light" >
                <tr >
                   <th > Title </th> 
                   <th > Description </th> 
                   <th > Status </th>
                   <th> Time </th> 
                   < th >  Agenda </th> 
                 </tr >
            </thead> <tbody > {this.state.Agenda.map(props =>
                    <tr key = { props.title } >
                    <td > { props.title } </td> 
                    <td > { props.description } </td> 
                    <td > { props.status } </td> 
                    < td > { props.time } </td>
                   
                     <td >

                     <div className="container">
                     <a className="btn btn-warning" href={ "/edit/" + props._id }>
                      <i class="fa fa-pencil-square-o"></i>&nbsp;Edit</a>  &nbsp;
                 <a className="btn btn-danger" href = "" onClick = {() => {this.deleteAgenda(props._id);}} ><i class="fa fa-trash"></i>&nbsp;Delete</a> </div></td></tr>)

            }

            </tbody> </table >
            <button className="btn btn-success"><a href="/create" style={{textDecoration:'none',color:'white'}}><i class="fa fa-plus-circle">&nbsp;New Agenda</i></a></button><br/>
            <button className="btn btn-danger" style={{marginTop:'10px'}}><a href="/report" style={{textDecoration:'none',color:'white'}}><i class="fa fa-file-text">&nbsp;Report</i></a></button>

            
            </div>
              </section>
              


            
            
            </div>
            
        )
    }
}