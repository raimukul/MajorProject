import React from "react";
import { MDBJumbotron,  MDBContainer} from "mdbreact";
import Footer from './Footer';
import Header from './Header/MainHeader'
import './Css/About.css'
const AboutUs = () => {
  return (
    <div>
     <Header/>
    <div className="text-center">
          <MDBJumbotron style={{background: 'linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)'}}>
             <h2 className=' font-weight-bold mb-0 pt-md-3 text-center text-dark font-heading'>About Us
             </h2>
             
              
               <blockquote className="blockquote mb-0">
      <p className='text-dark'>
        
        Our cheif want in life is somebody who will make us do what we can.
      </p>
      <footer className="blockquote-footer text-dark">
      Ralph Waldo <cite title="Source Title">Emerson</cite>
      </footer>
    </blockquote>
            
          </MDBJumbotron>
          <MDBContainer className='mt-5 font-body'>
          <p className="text-left h5">The Online Discussion Forum plays an integral part  by facilitating the out-of-class interaction among students necessary for effective exchange of ideas. The Online Discussion Forum ensures that learning and interaction do not end when the class does.</p>
         
          </MDBContainer>
            
            <Footer/>
    </div>
    </div>
  );
}

export default AboutUs;