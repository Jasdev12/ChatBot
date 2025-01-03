import React, { useState } from "react";
// import "./Bot.css"; // Add your styles here
import { FaUpload } from "react-icons/fa";

const qaData = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React to describe UI elements." },
  { question: "How do you use useState?", answer: "useState is a React hook that lets you add state to functional components." },
  // Add more Q&A pairs as needed
];

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message to chat
    setMessages([...messages, { text: input, sender: "user" }]);

    // Find matching answer
    const match = qaData.find((item) =>
      item.question.toLowerCase() === input.trim().toLowerCase()
    );

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: match
            ? match.answer
            : "Sorry, I don't have an answer for that question.",
          sender: "bot",
        },
      ]);
    }, 1000);

    setInput(""); // Clear input field
  };

  return (
    <div className="chatbot-container">
      <header className="chat-header">Q&A BOT</header>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <footer className="chat-footer">
      <div className="input-container">
        <input
          type="text"
          placeholder="Ask your question"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        {/* <button onClick={handleSend}>Send</button> */}
        {/* <UploadIcon
            onClick={handleSend}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "#007BFF",
            }}
          /> */}
           <FaUpload
            onClick={handleSend}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "#007BFF",
              fontSize: "24px",
            }}
          />
          </div>
      </footer>
    </div>
  );
}

export default Chatbot;