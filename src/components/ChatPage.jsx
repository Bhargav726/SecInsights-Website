// src/components/ChatPage.jsx
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ChatBot from "./ChatBot"; // Import the ChatBot component
import DocumentViewer from "./DocumentViewer"; // Import the DocumentViewer component

const ChatPage = () => {
  const location = useLocation();
  const selectedPDFs = location.state?.selectedPDFs || [];
  const [messages, setMessages] = useState([]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}> {/* Full page width and height */}
      {/* ChatBot Component - 50% of screen width */}
      <div style={{ flex: 1, height: '100%', borderRight: '1px solid #ddd' }}>
        <ChatBot messages={messages} setMessages={setMessages} />
      </div>

      {/* DocumentViewer Component - 50% of screen width */}
      <div style={{ flex: 1, height: '100%' }}>
        <DocumentViewer selectedPDFs={selectedPDFs} />
      </div>
    </div>
  );
};

export default ChatPage;
