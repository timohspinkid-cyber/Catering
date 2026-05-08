import React, { useState } from "react";

function ChatBot() {

  // OPEN/CLOSE CHAT
  const [openChat, setOpenChat] = useState(false);

  // INPUT MESSAGE
  const [message, setMessage] = useState("");

  // CHAT HISTORY
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Hello! Welcome to Smart Spare Parts Marketplace. How can I help you today?"
    }
  ]);

  // SEND MESSAGE
  const sendMessage = () => {

    // EMPTY INPUT
    if (!message.trim()) return;

    const userText = message;

    // CONVERT TO LOWERCASE
    const userMessage = message.toLowerCase();

    let botReply = "";

    // GREETINGS
    if (
      userMessage.includes("hello") ||
      userMessage.includes("hi") ||
      userMessage.includes("hey")
    ) {

      botReply =
        "👋 Hello! Welcome to Smart Spare Parts Marketplace.";

    }

    // BRAKES
    else if (
      userMessage.includes("brake") ||
      userMessage.includes("brakes")
    ) {

      botReply =
        "✅ Brake pads and brake discs are available.";

    }

    // ENGINE
    else if (userMessage.includes("engine")) {

      botReply =
        "⚙️ Engine parts are available.";

    }

    // BATTERY
    else if (
      userMessage.includes("battery") ||
      userMessage.includes("batteries")
    ) {

      botReply =
        "🔋 Car batteries are available.";

    }

    // OIL
    else if (
      userMessage.includes("oil") ||
      userMessage.includes("lubricant")
    ) {

      botReply =
        "🛢️ Engine oils are available.";

    }

    // PRICE
    else if (
      userMessage.includes("price") ||
      userMessage.includes("cost")
    ) {

      botReply =
        "💰 Prices depend on the spare part type.";

    }

    // DELIVERY
    else if (
      userMessage.includes("delivery") ||
      userMessage.includes("shipping")
    ) {

      botReply =
        "🚚 We offer countrywide delivery.";

    }

    // LOCATION
    else if (
      userMessage.includes("location") ||
      userMessage.includes("where are you")
    ) {

      botReply =
        "📍 We are located in Nairobi, Kenya.";

    }

    // THANKS
    else if (
      userMessage.includes("thanks") ||
      userMessage.includes("thank you")
    ) {

      botReply =
        "😊 You're welcome!";

    }

    // DEFAULT
    else {

      botReply =
        "🤖 Sorry, I didn't understand that.";

    }

    // UPDATE CHAT
    setMessages((prevMessages) => [
      ...prevMessages,

      {
        sender: "user",
        text: userText
      },

      {
        sender: "bot",
        text: botReply
      }
    ]);

    // CLEAR INPUT
    setMessage("");
  };

  return (

    <>

      {/* CHAT BUTTON */}
      <button
        className="btn btn-primary rounded-circle shadow"
        onClick={() => setOpenChat(!openChat)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          zIndex: 1000
        }}
      >
        💬
      </button>

      {/* CHATBOX */}
      {openChat && (

        <div
          className="card shadow-lg border-0"
          style={{
            borderRadius: "20px",
            width: "350px",
            position: "fixed",
            bottom: "90px",
            right: "20px",
            overflow: "hidden",
            background: "white",
            zIndex: 1000
          }}
        >

          {/* HEADER */}
          <div
            className="p-3 d-flex justify-content-between align-items-center"
            style={{
              background:
                "linear-gradient(90deg,#0f2027,#203a43,#2c5364)",
              color: "white"
            }}
          >

            <h5 className="fw-bold m-0">
              🤖 SpareBot Assistant
            </h5>

            <button
              className="btn btn-sm btn-light"
              onClick={() => setOpenChat(false)}
            >
              ✖
            </button>

          </div>

          {/* CHAT AREA */}
          <div
            style={{
              height: "350px",
              overflowY: "auto",
              padding: "15px",
              background: "#f8f9fa"
            }}
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "text-end"
                    : "text-start"
                }
              >

                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 15px",
                    borderRadius: "15px",
                    marginBottom: "10px",
                    maxWidth: "80%",
                    background:
                      msg.sender === "user"
                        ? "#0d6efd"
                        : "#e9ecef",
                    color:
                      msg.sender === "user"
                        ? "white"
                        : "black"
                  }}
                >

                  {msg.text}

                </div>

              </div>

            ))}

          </div>

          {/* INPUT AREA */}
          <div className="p-3 border-top">

            <div className="d-flex gap-2">

              <input
                type="text"
                className="form-control"
                placeholder="Ask something..."
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {

                  if (e.key === "Enter") {

                    sendMessage();
                  }
                }}
              />

              <button
                className="btn btn-primary"
                onClick={sendMessage}
              >
                Send
              </button>

            </div>

          </div>

        </div>

      )}

    </>

  );
}

export default ChatBot;