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
          <p className="text-left h5">Once your entrance exams are over, you try to find better colleges for you. You require a proper medium to know about everything the colleges you wish to get in. Mentors of College CafeQueria will tell you what you should choose and will solve all of your doubts through live interaction. That's why we say, "If colleges are the planets, we are the telescope".</p>
          <p className="text-left h5">Similarly, when you get promoted from your 12th grade, you can't just search for colleges without a proper medium. There are thousands of colleges, and they are present far away from your reach. You will need a well-designed medium to have a glimpse at these colleges (that you wish to get in). Furthermore, a better medium will help you understand the appearance & mechanism of the colleges. That is where College CafeQueria comes in for you.
Once the entrance exams are over, students become anxious about the college they wish to get in. Many students are confused between two or more colleges and are worried about which one is better for them. The score of your result throws you into the maze of decisions. keep striking in your head. To get you out of this maze, Mentors from College CafeQueria will guide you. You can interact with a Mentor live through our app/website and have a proper discussion regarding your doubts. You choose the college that you wish to get in and the Mentor will tell you anything you want to know... as well as everything you should know.
When you confirm which college to join then also the problem does not end. Once your college starts then your problems increases. Common thoughts which cause problems are how to handle academics, what should I learn to excel, how are the opportunities of learning new skills which you always dreamt of and what are their scope and many more.</p>
          <p className="text-left h5">College CafeQueria will help you resolve these problems. We'll provide you with a Mentor(of the college you wish to join or the college you are in), with whom you can interact through a video call to clear all your doubts.</p>
          </MDBContainer>
            
            <Footer/>
    </div>
    </div>
  );
}

export default AboutUs;