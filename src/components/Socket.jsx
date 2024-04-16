// src/App.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://192.168.172.232:3001"); // Connect to the server

function AppSocket() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  console.log(message);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <div>
      <h1>Socket.IO Chat</h1>
      <ul>
        {chat.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendChat}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AppSocket;
