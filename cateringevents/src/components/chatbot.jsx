import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m your AwayHome Events Assistant. Ask me about services, booking or pricing!",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const responses = [
    {
      regex: /price|cost|how much/i,
      replies: [
        "Our pricing depends on the event type and size. Contact us for a quote 💰",
        "We offer flexible pricing for weddings, corporate events and parties 🎉",
      ],
    },
    {
      regex: /catering/i,
      replies: [
        "We offer premium catering services for all types of events 🍽️",
        "Our catering includes weddings, corporate events and private parties 👨‍🍳",
      ],
    },
    {
      regex: /tents|chairs/i,
      replies: [
        "We provide luxury tents & chairs, including the exclusive Atrium Tent ⛺",
      ],
    },
    {
      regex: /location/i,
      replies: ["We are located at Mbugus Plaza, Nairobi, Kenya 📍"],
    },
    {
      regex: /hello|hi|hey/i,
      replies: ["Hello 👋 How can I help you today?"],
    },
  ];

  const getBotReply = (text) => {
    for (let r of responses) {
      if (r.regex.test(text)) {
        return r.replies[Math.floor(Math.random() * r.replies.length)];
      }
    }
    return "Thanks for your message 😊 Ask about services, pricing or booking.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-page">

      {/* HERO SECTION (same style as ContactPage) */}
      <section className="hero chat-hero">
        <div className="overlay">
          <h1>AI Chat Assistant</h1>
          <p>Get instant help about our events & services</p>
        </div>
      </section>

      {/* CHAT SECTION */}
      <section className="chat-section">
        <div className="chat-container">

          {/* CHAT BOX */}
          <div className="chat-box">
            <div className="chat-header">
              AwayHome Events Assistant 💬
            </div>

            <div className="chat-body">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-msg ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>

          {/* INFO SIDE (like contact info panel) */}
          <div className="chat-info">
            <h2>Need Help?</h2>

            <div className="info-box">
              <h4>Services</h4>
              <p>Catering, Decoration, Tents, Transport</p>
            </div>

            <div className="info-box">
              <h4>Contact</h4>
              <p>0728 649 788 | 0726 842 014</p>
              <p>info@awayhomeevents.com</p>
            </div>

            <div className="info-box">
              <h4>Location</h4>
              <p>Mbugus Plaza, Nairobi</p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION (same style as ContactPage) */}
      <section className="about-company">
        <div className="about-content">
          <h2>AwayHome Chat Support</h2>
          <p>
            Our AI assistant helps you instantly learn about our event planning,
            catering, décor, tents and booking services.
          </p>
        </div>
      </section>

      {/* FOOTER (same as ContactPage) */}
      <footer className="footer">
        <div className="footer-bottom">
          <p>
            @2025 - All Right Reserved. Developed by Nevin Digital Marketing Agency
          </p>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <div className="chatbot">
        <p>💬 Chat with us</p>
      </div>

    </div>
  );
};

export default ChatBot;