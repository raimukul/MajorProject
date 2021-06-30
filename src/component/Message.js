import React, { useEffect, useState }  from 'react';
import firebase from '../firebase'
import './Css/Message.css'

const Message = ({roomId}) => {
   const[Message , setMessage] =  useState([])
      
    useEffect(()=>{
     
        firebase.firestore().collection('rooms').doc(roomId)
        .collection('messages').orderBy('timestamp','asc')
        .onSnapshot((snapshot)=>{
            setMessage(snapshot.docs.map((doc)=>({
               image:doc.data().image,
               message:doc.data().message,
               timestamp:doc.data().timestamp,
               user:doc.data().user
            })))
        })
    },[roomId])
    
//    console.log(Message)

    return (
       
        <div className=''>
        
           {
              Message.map((doc,i)=>(
                  <div className='mb-1'>
                  <div key={i}>
                        <div className="d-flex justify-content-start bg-msg-f h-auto " >
                             <div className="p-2 col-example text-left bg-msg-f h-50"><img src={doc.image}   className="rounded float-left img-msg" alt="aligment" />
                             </div>
                            <div className="col-example text-left d-flex bg-msg-f flex-wrap">
                                <span className="font-weight-bold text-dark bg-msg-f w-auto bord">{doc.user} </span>
                                <span className="text-black-50 bg-msg-f w-auto bord mukul">&nbsp; {new Date(doc.timestamp?.toDate()).toLocaleTimeString()}</span>   
                                <span className="msg text-left text-dark w-100 muku"><strong>{doc.message}</strong> </span>
                            </div>
                           
                       </div>
                     
                   </div> 
                   </div>
              ))
    
           } 
           
</div>
        
    );
};

export default Message;