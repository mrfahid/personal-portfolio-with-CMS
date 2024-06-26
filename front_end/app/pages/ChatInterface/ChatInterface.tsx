"use client";

import React, { useState } from "react";
import Iframe from "react-iframe"; // Import the React iframe component
import { images } from "../../constants";
import { FaXmark } from "react-icons/fa6"; // Import the icons
import styles from "./ChatInterface.module.scss"; // Import SCSS module for styling
import Image from "next/image";

const ChatInterface = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        onClick={toggleChatbot}
        title={showChatbot ? "Hide Shah Bot" : "Show Shah Bot"}
      >
        {showChatbot ? (
          <FaXmark style={{ width: "30px", height: "30px" }} />
        ) : (
          <Image
            src={images.chatbot}
            alt=""
            style={{ width: "45px", height: "45px" }}
          />
        )}
      </button>
      {showChatbot && (
        <div className={styles.chatbotContainer}>
          <Iframe
            url="https://console.dialogflow.com/api-client/demo/embedded/f2f3b0eb-80f1-4a68-9ff8-14624eb6f1de"
            width="300"
            height="430"
            allow="microphone;"
            className={styles.chatbotIframe}
            
          />
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
