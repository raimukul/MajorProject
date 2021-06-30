import React, { useState } from 'react';
import Sidebar from './component/Sidebar'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Chat from './component/Chat'
import './App.css'
import Index from './component/Index'
import MainHeader from './component/Header/MainHeader'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Footer from './component/Footer'
import Body from './component/Body'
import Contact from './component/Contact'
import About from './component/About'
import Feature from './component/Feature'
import firebase from './firebase';
import Post from './component/Post';
import Test from './component/Test'


const  App = ()=> {
  //  const [user , setUser] = useState('mukul')
   const [user , setUser] = useState(null)
   
   
   firebase.auth().onAuthStateChanged((user)=>{
       if(user){
         setUser(user)
       }
   })
 
   if(user){
    return ( <div >
      <Router>
        {/* <HeaderLogin/> */}
        <Sidebar/>
          <Switch> 
            {/* <Route exact path="/"> 
             <h2>Home Screen</h2>
             </Route> */}
             <Route exact path="/rooms/:roomId"> 
              <h2 className="App">Chat Section</h2>
              <Chat/>
             </Route>
             <Route exact path="/rooms/:roomId/:postId"> 
               <Post/>
             </Route>
              {/* <Route  path="/" component={Test} /> */}
          </Switch>
        </Router>
   </div>)
   } else  {
return (<div>
  <Router>
   <Switch>  
      <Route exact path="/" component={Index} /> 
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={SignUp} /> 
      <Route exact path="/footer" component={Footer} /> 
      <Route exact path="/body" component={Body} />
      <Route exact path="/header" component={MainHeader} />
      <Route exact path="/contact" component={Contact} /> 
      <Route exact path="/about" component={About} />  
      <Route exact path="/features" component={Feature} />
      <Route exact path="/test" component={Test} />
   </Switch>
 </Router>
    </div>) 
  }
  
  
}

export default App;
