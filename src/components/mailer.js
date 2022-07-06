import React from 'react';
import emailjs from 'emailjs-com'
import "./mailer.css";

import contact from './images/contact2.jpg';
import agent from './images/agent1.jpg';





const Mailer = props =>{

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_kj2v9xh',
            'template_a7zywev',
             e.target,
            'JaAGl9BWdssqBvmvO'
            ).then(res=>{
                   console.log(res);
            }).catch(err=>console.log(err));
        
    }

   
        return ( 
                  <div>

<section className="header3">
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
               <h1>Contact Us</h1>
               </section>
         <div class="row">
               <div class="column">
                     
                     <div className='panel'>
                     <h2>Meet Our Brilliant and Knowledegeable Support Team</h2><br/>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>kavishka dilshan</b><br/>Agenda Management<br/>kavishka@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Sumedha Lakmal</b><br/>Event Management<br/>sumedha@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Janith lakmal</b><br/>Employee Management<br/>janith@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Rumal dilshan</b><br/>Feedback Management<br/>rumal@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Rashmi Bahagya</b><br/>payment Management<br/>rashmi@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Gihan Madushan</b><br/>Profile Manage<br/>gihan@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                     <p><b>Dulanjali disanayaka</b><br/>Report Manage<br/>dulanjali@gmail.com</p>
                     </div>
                     <div className='agent'>
                     <img src={agent} alt="contact" className='ag'/>
                      <p><b>Tharidu Madushan</b><br/>Task Manage<br/>tharidu@gmail.com</p>
                     </div>
                     
                     </div>

                     <div class="contact-col">
                         <i class="fa fa-home fa-lg"></i>
		                <div>
		                     <p> XZA Road,ABC Kandy<br/>
			                       bkshdf,,agsagul ,sl</p>
		               </div>
		                    <i class="fa fa-phone  fa-lg"></i>
		                <div>
		                     <p>+94787810604<br/>
			                       Monday to sunday 10 am to 6pm</p>
		                </div>
		                    <i class="fa fa-envelope-o  fa-lg"></i>
		                 <div>
		                      <p>Intro@abc.com<br/>
			                       email us your quary</p>
		                 </div>
                     </div>
                  </div>
             </div>

             <img src={contact} alt="contact" className='contactimage'/>

         <div className="container border"
                     style={{marginTop:"-320px",
                             width:'40%',
                             backgroundPosition:'center',
                             backgroundSize:"cover",
                             marginLeft:'800px',
                             
                              
                            }}>
            
                   <center><h1 style={{marginTop:'25px'}}>Contact Form</h1></center>
                   <form  className='row' style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                   <label>name</label>
                  <input type= "text" name="name"  className='form-control'/>
 
                   <label>Email</label>
                   <input type="email" name="user_email" className='form-control' />
 
                 <label>Message</label>
                 <textarea name='message' rows='4' className='form-control' />
                 <input 
                    type='submit' 
                    value='Send' 
                    
                    className='form-control btn btn-primary'
                    style={{marginTop:'30px'}}
                    />
                    

            </form>
           
            
           </div>
         

        
           
           <center>
        <section className="footercontact">
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
        
        




        );
    
}

export default Mailer;