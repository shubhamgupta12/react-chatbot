import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { ReactComponent as PaperPlaneIcon } from "../../assets/paper-plane.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis.svg";
import "./chat.css";

//  Import action
import { userMessage, sendMessage } from "../../actions/chatbot";

const Chat = ({ chat, userMessage, sendMessage }) => {
  // Handle Users Message
  const [message, setMessage] = useState("");
  const [showBot, setShowBot] = useState(false);

  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    if (showBot) {
      const objDiv = endOfMessages.current;
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  };

  useEffect(scrollToBottom, [chat, showBot]);

  //  Function that handles user submission
  const handleClick = async e => {
    // const code = e.keyCode || e.which;

    // if (code === 13) {
    userMessage(message);
    sendMessage(message);
    setMessage("");
    // }
  };

  const handleEnterPress = async e => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      handleClick();
    }
  };

  return (
    <>
      {showBot && (
        <div className="chat-container">
          <button className="close-bot" onClick={() => setShowBot(false)}>
            &times;
          </button>
          {/* Handle Messages */}
          <div ref={endOfMessages} className="chat-body">
            <span className="chat-start">Today</span>
            {!chat.length
              ? ""
              : chat.map((msg, index) => (
                  <div
                    key={`chat_${index}`}
                    className={`chat-bubble-${msg.type}`}
                  >
                    {msg.message}
                  </div>
                ))}
          </div>
          {/* Input Box */}
          <div className="chat-footer">
            <input
              id="chatBox"
              className="input"
              onChange={e => setMessage(e.target.value)}
              onKeyPress={handleEnterPress}
              value={message}
              placeholder="Type a message..."
              autoComplete="off"
            ></input>
            <button className="chat-send-btn" onClick={handleClick}>
              <PaperPlaneIcon />
            </button>
          </div>
        </div>
      )}

      <button className="open-chatbot" onClick={() => setShowBot(true)}>
        <Ellipsis />
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  chat: state.chatbot.messages
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);
