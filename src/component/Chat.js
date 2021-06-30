import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Css/chat.css";
import firebase from "../firebase";
import Message from "./Message";
import { useHistory } from "react-router-dom";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [displayName, setDisplayName] = useState("");
  const [url, setUrl] = useState("");
  const [input, setInput] = useState("");
  const addPost = (e) => {
    e.preventDefault();
    if (input) {
      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .collection("posts")
        .add({
          name: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };

  useEffect(() => {
    if (roomId) {
      firebase
        .firestore()
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data()?.name);
        });
    }
    firebase
      .firestore()
      .collection("rooms")
      .doc(roomId)
      .collection("posts")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              name: doc.data().name,
              id: doc.id,
              timestamp: doc.data()?.timestamp,
            };
          })
        );
      });

    var user = firebase.auth().currentUser;
    if (user) {
      setDisplayName(user.displayName);
      setUrl(user.photoURL);
    }
  }, [roomId]);

  const submit = (e) => {
    e.preventDefault();
    if (roomId) {
      if (value) {
        firebase
          .firestore()
          .collection("rooms")
          .doc(roomId)
          .collection("messages")
          .add({
            image: url,
            message: value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: displayName,
          });
      }
    }
    setValue("");
  };

  const selectPost = (post) => {
    history.push(`/rooms/${roomId}/${post.id}`);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", flexGrow: "4" }}
      className="mt-5"
    >
      <strong className="h3"># {roomDetails}</strong>
      <Message roomId={roomId} />
      <form className="App text-left">
        <input value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button
          type="submit"
          onClick={(e) => submit(e)}
          style={{ display: "none" }}
        >
          send
        </button>
      </form>
      <hr></hr>
      <p className="App text-left h4 pt-3"># Post Section </p>
      <form className="App text-left">
        <input onChange={(e) => setInput(e.target.value)} value={input}></input>
        <button type="submit" onClick={(e) => addPost(e)}>
          create Post
        </button>
      </form>
      {posts.map((post, id) => {
        return (
          <h2 key={id} onClick={() => selectPost(post)}>
            -- {post.name}{" "}
          </h2>
        );
      })}
    </div>
  );
};

export default Chat;
