import React from "react";
import './Css/Body.css';
import Svg1 from './Img/1.svg'
import Svg2 from './Img/2.svg'
import Svg3 from './Img/3.svg'
import {MDBJumbotron, MDBRow,MDBCol,MDBView} from 'mdbreact'

const BackgroundImagePage = () => {
  return (
      <MDBJumbotron style={{background: 'linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)'}}>
       {/* First illistration */}
       <section>
       <div class="row ">
       <div class="col-md-6 order-2 order-lg-1">
       <MDBView waves>
              <img src={Svg1} className="img-fluid" alt="" />
            </MDBView>
       </div>
       <div class="col-md-6 order-1 order-lg-2 ">
           <div className='centerData '>
           <div>
           <p className="text1 font-heading">Welcome to </p>
           <p className="text2 font-heading">College CafeQueria</p>
           <p className="text3 text-center font-body"> An initiative, launched with a motive to eliminate all the doubts regarding college life and academia.</p></div>
           </div>
           </div>
       </div>
       </section>
       {/* Second illistration */}
       <div className="mt-5">
       <MDBRow >
           <MDBCol md="6" className=" centerData font-body"> 
           <div className="justify-content-between mt-5">
           <p className="feature-text"><b>F&nbsp;</b>aster replies to your doubts</p>
           <p className="feature-text"><b>O&nbsp;</b>cean of college info</p>
           <p className="feature-text"><b>R&nbsp;</b>eliable answers to your questions</p>
           <p className="feature-text"><b>U&nbsp;</b>niversal college discussion platform</p>
           <p className="feature-text"><b>M&nbsp;</b>entors to ask your questions</p>
           </div>
           </MDBCol>
           <MDBCol md="6" ><MDBView waves>
              <img src={Svg2} className="img-fluid" alt="" />
            </MDBView></MDBCol>
       </MDBRow>
       </div>
        {/* Second illistration */}
        <div className="mt-5">
       <MDBRow >
       <MDBCol md="6" ><MDBView waves>
              <img src={Svg3} className="img-fluid" alt="" />
            </MDBView></MDBCol>
           <MDBCol md="6" className=" centerData font-body" >
               <h3 >For looking at the galaxies, stars, and planets, you need a Telescope. 
                   Similarly, when you are promoted from your 12th grade, you will need a well-designed medium 
                   to have a glimpse at the colleges that you wish to get in or the college you are studying in.
                   <br></br>A better medium will be required to understand the appearance and mechanism of thousands of the existing colleges.
                   </h3>
              
           </MDBCol>
           
       </MDBRow>
       </div>
      </MDBJumbotron>
  );
}

export default BackgroundImagePage;