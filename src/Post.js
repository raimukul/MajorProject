import React from 'react';
import moment from 'moment'

const Post =({key , title , comments , submitted})=>{
//    console.log(submitted.fromNow())
   
   return <div key={key} > 
         <h1>Post from Post title {title}</h1>
          <p>  {comments} comment  </p>   
          <p> {moment(submitted).fromNow()} submitted </p>   
        </div>
}

export default Post;
 
