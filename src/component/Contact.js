import React, { useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBJumbotron, MDBContainer } from "mdbreact";
import Footer from './Footer';
import Header from './Header/MainHeader'
import firebaseall from "../firebase";
import './Css/Contact.css'

const ContactUs = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [company, setCompany] = useState('')
   const [massage , setMassage] = useState('')
   
   const submit = (e)=>{
    e.preventDefault();
    if(name){
        if(email){
          if(phone){
            if(company){
              if(massage){
                firebaseall.database().ref('contact-home').push({
                 name,email,phone,company,massage 
                })
              }
            }
          }
        }
    }else{
      alert('please fill')
    }
    
    setName('')
    setEmail('')
    setPhone('')
    setCompany('')
    setMassage('')
    
    alert('Thank you for your response.We\'ll revert back to you soon through mail.')
   }




return (
<div className="font-head">
    <Header/>

          <MDBJumbotron style={{background: 'linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)'}}>
            <h2 className=' font-weight-bold mb-0 pt-md-2 text-center text-dark font-heading'>
                  Contact Us
                </h2>
                <h5 className='display-6 mb-0 pt-md-2 text-center text-dark font-body'>
                  Question? Comments! Suggestions?{' '}
                  We are always here to help you. 
                </h5>
          </MDBJumbotron>
          <div>
      <MDBContainer>
      <section className="contact-section my-5">
      <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form font-body">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2 amber-text" />
                Write to us:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-name"
                      label="Your name"
                      required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="email"
                      id="form-contact-email"
                      label="Your email"
                      required
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="number"
                      id="form-contact-phone"
                      label="Your phone"
                      required
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-company"
                      label="Your company"
                      required
                      value={company}
                      onChange={(e)=>setCompany(e.target.value)}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Your message" 
                      required
                      value={massage}
                      onChange={(e)=>setMassage(e.target.value)}
                    />
                    <MDBBtn rounded color="amber" onClick={(e)=>submit(e)}>
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 font-body">
              <h3 className="my-4 pb-2">Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="map-marker-alt" className="pr-2" />
                    GBU, Greater Noida, IN
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="phone" className="pr-2" />+ 91 8002910156
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    gbu.mukul@gmail.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#1" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </section>
      </MDBContainer>
      </div>
      <Footer/>
     </div>
  

  );
}

export default ContactUs;