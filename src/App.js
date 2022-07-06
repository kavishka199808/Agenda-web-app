import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";



import EditAgenda from "./components/Edit-Agenda.component";
import CreateAgenda from "./components/Create-Agenda.component";
import AgendaList from "./components/list-Agenda.component";
import report from "./components/report";












import "./components/app.css";



function App() {

    return ( <Router >
        <div className = "container-fluid" >
        
       
        
        <Route path = "/" exact component = { AgendaList }/>
        <Route path = "/edit/:id" component = { EditAgenda }/> 
        <Route path = "/create" component = { CreateAgenda }/> 
        <Route path = "/report"  component={ report } />
      

       
      
      
        
     
   
       
       
        </div > 
    

     </Router>

     
    );
}

export default App;