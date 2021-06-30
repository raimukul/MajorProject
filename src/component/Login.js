import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBIcon } from 'mdbreact';
import './Css/Login.css'
import Header from './Header/MainHeader'
import Footer from './Footer'
import firebase ,{provider_g ,provider_fb , provider_tw} from '../firebase';
const FormPage = () => {

  const google = ()=>{ 
    firebase.auth().signInWithPopup(provider_g).then((result)=>{ 
      let photo = result.user.photoURL;
      let Name = result.user.displayName;
      firebase.firestore().collection('users').doc(result.user.uid).set({
        Name,photo
      })
    }).catch((e)=>{
      alert(e.message)
    })
  }
  const facebook = ()=>{ 
    firebase.auth().signInWithPopup(provider_fb).then((result)=>{ 
      let photo = result.user.photoURL;
      let Name = result.user.displayName;
      firebase.firestore().collection('users').doc(result.user.uid).set({
        Name,photo
      })
    }).catch((e)=>{
      alert(e.message)
    })
  }
  const twitter = ()=>{ 
    firebase.auth().signInWithPopup(provider_tw).then((result)=>{ 
      let photo = result.user.photoURL;
      let Name = result.user.displayName;
      firebase.firestore().collection('users').doc(result.user.uid).set({
        Name,photo
      })
    }).catch((e)=>{
      alert(e.message)
    })
  }


return (
  <div className="font-head">
  <Header/>
  <div className=" shadow pb-5 pt-5"  style={{background: 'linear-gradient(87deg, #FFE9D5 0, #FFE9D5 90%)'}}> 
   <MDBContainer className="mt-3">
     {/* <h4 className="font-login text-center">Making you successful is our number one concern.</h4> */}
     <MDBRow style={{ display:'flex', justifyContent:'center' }}>
    <MDBCol md="6">
     <MDBCard className="p-5">
       <form>
         <p className="h3 text-center mb-5 font-heading">Log in</p>
         <div className="grey-text font-body">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
          <div className="p-1 pb-3">
          <p className="font-small d-flex justify-content-end pb-3 float-left">
          Not a member?
                <a href="#!" className="blue-text ml-1">
                Sign up
                </a>
              </p>
              <p className="font-small blue-text d-flex justify-content-end pb-3 float-right">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
          </div>
        </div>
        <div className="text-center mt-4 font-body">
          <MDBBtn color="orange">Login</MDBBtn>
        </div>
        <p className="text-center mt-5 font-body">or Sign in with:</p>
        <MDBRow className="mt-2 mb-3 d-flex justify-content-center">  
                <a  className="fa-lg p-2 m-2 fb-ic">
                  <MDBIcon fab icon="facebook-f" size="lg" className="orange-text" onClick={facebook} />
                </a>
                <a  className="fa-lg p-2 m-2 tw-ic">
                  <MDBIcon fab className="fa-twitter orange-text fa-lg" onClick={twitter} />
                </a>
                <a  className="fa-lg p-2 m-2 gplus-ic">
                  <MDBIcon fab className="fa-google-plus-g orange-text fa-lg" onClick={google}/>
                </a>
              </MDBRow>
      </form>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
<Footer/>
</div>
);
};

export default FormPage;