import React from 'react';

import axios from 'axios';

import ReactToPrint from 'react-to-print';




export default class AgendaReport extends React.Component{
    constructor(props) {
        super(props);


        this.state = {
            Agenda: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Agenda/')
            .then(response => {
                this.setState({ Agenda : response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Agenda/')
            .then(response => {
                this.setState({ Agenda : response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
   
    render() {return (

         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
          
            </div >
            
            </div> 
            <div  ref ={el=>(this.componentRef =el)}>
            <table class="table table-bordered" >
            <thead className = "thead-light" >
               
            <div>
            
            
            <h3 style={{textAlign:'center'}}>Agenda LIST</h3>
            </div>

            
            <tr >
            <th > Title </th> 
            <th > Discription </th> 
            <th > Status </th>
            <th> Date </th> 
             </tr >
            </thead> <tbody > {this.state.Agenda.map(props =>
                       <tr key = { props.title } >
                       <td > { props.title } </td> 
                       <td > { props.description } </td> 
                       <td > { props.status } </td> 
                       < td > { props.date } </td>
                    
                     </tr>
                )

            }

            </tbody> </table ></div>


           <div className = "container" >
                <ReactToPrint trigger={()=> {
                  return<button style={{backgroundColor:'red',width:'100px',height:'30px',borderRadius:'25px',border:'none',color:'white'}}>Print</button>
                }}
                content = {() => this.componentRef}
                documentTitle ='new document'
                pageStyle ="print"
                />
            </div>

        {/* footer */}
        <center>
          <section className="reportfooter">
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
        </center>
            
            </div>
        )
    }
}