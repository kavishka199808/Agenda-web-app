import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";



import EditCourse from "./components/Edit-Course.component";
import CreateCourse from "./components/Create-Course.component";
import CourseList from "./components/list-Course.component";
import Courses from "./components/courses";
import scourse from "./components/singlecourse";










import "./components/app.css";

function App() {

    return ( <Router >
        <div className = "container-fluid" >
       
       
        
        <Route path = "/" exact component = { CourseList }/>
        <Route path = "/edit/:id" component = { EditCourse }/> 
        <Route path = "/create" component = { CreateCourse }/> 
        <Route path = "/courses" component = { Courses }/> 
        <Route path = "/scourse" component = { scourse }/> 
      
      
        
     
   
       
       
        </div > 
    

     </Router>

     
    );
}

export default App;