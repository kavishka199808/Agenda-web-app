import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";



import EditAgenda from "./components/Edit-Agenda.component";
import CreateAgenda from "./components/Create-Agenda.component";
import AgendaList from "./components/list-Agenda.component";













function App() {

    return ( <Router >
        <div className = "container-fluid" >
       
       
        
        <Route path = "/" exact component = { AgendaList }/>
        <Route path = "/edit/:id" component = { EditAgenda }/> 
        <Route path = "/create" component = { CreateAgenda }/> 
       
      
      
        
     
   
       
       
        </div > 
    

     </Router>

     
    );
}

export default App;