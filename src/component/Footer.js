import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Css/Footer.css'
const FooterPagePro = () => {
  return (
    <MDBFooter  className="font-small pt-0 bg-gradient-footer">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center font-body" id="bgfooter">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a rel="noopener noreferrer" href="/" target="_blank">Home</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Upcomings</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/contact">Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5 font-body">
            <p style={{ lineHeight: "1.7rem" }}>
            An Internet forum, or message board, is an online discussion site where people can hold conversations in the form of posted messages.They differ from chat rooms in that messages are often longer than one line of text, and are at least temporarily archived. Also, depending on the access level of a user or the forum set-up, a posted message might need to be approved by a moderator before it becomes publicly visible.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
 
              <a className="tw-ic ml-2" rel="noopener noreferrer" href="#!" target="_blank">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              
              <a className="li-ic ml-2" rel="noopener noreferrer" href="#!" target="_blank">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic ml-2" rel="noopener noreferrer" href="#!" target="_blank">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="http://www.major.mukulrai.in">College CafeQueria</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;