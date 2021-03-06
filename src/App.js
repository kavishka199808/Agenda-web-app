import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";



import EditAgenda from "./components/Edit-Agenda.component";
import CreateAgenda from "./components/Create-Agenda.component";
import AgendaList from "./components/list-Agenda.component";
import report from "./components/report";
import home from "./components/Home";
import agendas from "./components/Agendas";
import contact from "./components/mailer";













import "./components/app.css";



function App() {

    return ( <Router >
        <div className = "container-fluid" >
        
       
        
        <Route path = "/" exact component = { AgendaList }/>
        <Route path = "/edit/:id" component = { EditAgenda }/> 
        <Route path = "/create" component = { CreateAgenda }/> 
        <Route path = "/report"  component={ report } />
        <Route path = "/home" component={ home } />
        <Route path = "/agendas" component={ agendas } />
        <Route path = "/contact"  component={ contact } />


       
      
      
        
     
   
       
       
        </div > 
    

     </Router>

     
    );
}

export default App;