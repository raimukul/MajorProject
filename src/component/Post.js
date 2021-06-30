import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Css/chat.css";
import firebase from "../firebase";

const Post = () => {
  const { roomId } = useParams();
  const { postId } = useParams();
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [url, setUrl] = useState("");
  const [post, setPost] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (value) {
      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .add({
          name: value,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: displayName,
          image: url,
        })
        .catch((e) => {
          alert(e.message);
        });
      setValue("");
    }
  };

  useEffect(() => {
    if (roomId && postId) {
      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              name: doc.data()?.name,
              timestamp: doc.data()?.timestamp,
              user: doc.data()?.user,
              image: doc.data()?.image,
            }))
          );
        });

      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .collection("posts")
        .doc(postId)
        .onSnapshot((snapshot) => {
          setPost(snapshot.data().name);
        });
    }

    var user = firebase.auth().currentUser;
    if (user) {
      setDisplayName(user.displayName);
      setUrl(user.photoURL);
    }
  }, [postId]);

  return (
    <div
      className="App main pt-4"
      style={{ display: "flex", flexDirection: "column", flexGrow: "4" }}
    >
      <h4 className="font-weight-bold text-dark bord pt-5 text-left">
        #{post}
      </h4>
      {comments.map((comment, id) => (
        <div className="mb-1">
          <div key={id}>
            <div className="d-flex justify-content-start bg-msg-f h-auto ">
              <div className="p-2 col-example text-left bg-msg-f h-50">
                <img
                  src={comment.image}
                  className="rounded float-left img-msg"
                  alt="aligment"
                />
              </div>
              <div className="col-example text-left d-flex bg-msg-f flex-wrap">
                <span className="font-weight-bold text-dark bg-msg-f w-auto bord">
                  {comment.user}{" "}
                </span>
                <span className="text-black-50 bg-msg-f w-auto bord mukul">
                  &nbsp;{" "}
                  {new Date(comment.timestamp?.toDate()).toLocaleTimeString()}
                </span>
                <span className="msg text-left text-dark w-100 muku">
                  {comment.name}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <form className="pt-5 text-left">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          type="submit"
          onClick={(e) => submit(e)}
          style={{ display: "none" }}
          className="text-black"
        >
          {" "}
          comment
        </button>
      </form>
    </div>
  );
};

export default Post;
