import React from "react";
import { MDBJumbotron,  MDBContainer, MDBRow,MDBCol} from "mdbreact";
import './Css/Features.css'
import Footer from './Footer';
import Header from './Header/MainHeader'
import Preview from './Img/preview.svg'
import Search from './Img/search.svg'
import Group from './Img/groups.svg'
import SocialLogin from './Img/Social_login.svg'
import Private from './Img/private_communities.svg'
import Content from './Img/rich_content.svg'


const Features = () => {
  return (
    <div>
     <Header/>
    <div className="text-center">
          <MDBJumbotron style={{background: 'linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)'}}>
             <h2 className=' font-weight-bold mb-0 pt-md-3 text-center text-dark font-heading'>Features
             </h2>
             
              
               <blockquote className="blockquote mb-0">
      <p className='text-dark font-body'>
        
      No matter your objective, your success depends on a great user experience. College CafeQueria is a re-imagining of how community engagement should be done, and users love it.
      </p>
      
    </blockquote>
            
          </MDBJumbotron>
          <MDBContainer className='mt-5 font-body'>
              <MDBRow>
                  <MDBCol md="4">
                  <img src={Preview} className="img-fluid" alt="" />
                  <h3 className="sub2Title iconAndText-title title1"> Real-Time Preview  Edits </h3> 
                  <p className="iconAndText"> Members can preview their comments in real time right in the page, and they can edit their existing comments right in the page as well. </p>
                  </MDBCol>
                  <MDBCol md="4">
                  <img src={Search} className="img-fluid" alt="" />
                  <h3 className="sub2Title iconAndText-title title2"> Powerful Search </h3> 
                  <p className="iconAndText"> Autocomplete helps users find what they are looking for quickly. Search results include images and videos added to posts. Relevance is based on keywords, word order and post quality. </p>
                  </MDBCol>
                  
                  <MDBCol md="4">
                  <img src={Group} className="img-fluid" alt="" />
                  <h3 className="sub2Title iconAndText-title title3"> Groups </h3> 
                  <p className="iconAndText">Suited for larger communities, this feature lets members form smaller groups where they can hold discussions and schedule events. Groups can be public or private and can be managed by moderators or by the members themselves. </p>
                  </MDBCol>
              </MDBRow>
              <MDBRow>
                  <MDBCol md="4">
                  <img src={SocialLogin} className="img-fluid" alt="" />
                  <h3 className="sub2Title iconAndText-title title4"> Social Logins</h3> 
                  <p className="iconAndText">College CafeQueria supports the most popular social logins, reducing the time-to-post and increasing the likelihood of engaging a visitor.</p>
                  </MDBCol>
                  <MDBCol md="4">
                  <img src={Content} className="img-fluid" alt="" />
                  <h3 className="sub2Title iconAndText-title title6">Rich Content</h3> 
                  <p className="iconAndText">Members can format posts with html, markdown, or bbcode. Images can be dragged and dropped and videos are automatically embedded. Tweets, Vines and Pins are automatically recognized when pasted into a comment. </p>
                  </MDBCol>
                  <MDBCol md="4">
                  <img src={Private} className="img-fluid" alt="" />
                  <h3 className="sub2Title iconAndText-title title5"> Private Community </h3> 
                  <p className="iconAndText">College CafeQueria can be set to be completely private. Only registered members will be able to log in and participate in the community. </p>
                  </MDBCol>
                  
                  
              </MDBRow>
          </MDBContainer>
            
            <Footer/>
    </div>
    </div>
  );
}

export default Features;