import React, { useEffect, useState, useContext } from "react";
import firebase from "./config/firebase";
import { AuthContext } from "./AuthService";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const user = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection("messages").add({
      content: value,
      user: user.displayName,
    });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return doc.date();
        });
        setMessages(messages);
      });
  }, []);

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message) => (
          <li>
            {message.user}:{message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
