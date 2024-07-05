import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addButton from "./assets/add-30.png";
import messageIcon from "./assets/message.svg";
import sendButton from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImageLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="titleContainer">
          <img src={gptLogo} alt=" " className="chatgptLogo" />
          <span className="chatgptTitle">ChatGPT </span>
        </div>
        <button className="newChatButton">
          <img src={addButton} alt=" " className="addButton" />
          New Chat
        </button>
        <div className="chatQueries">
          <button className="chatQuery">
            <img src={messageIcon} alt=" " />
            How to use ChatGPT?
          </button>
        </div>
      </div>
      <div className="mainChatSection">
        <div className="chatgptResponseContainer">
          <div className="chatgptResponse">
            <img className="chatImage" src={userIcon} />
            <p className="response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className="chatgptResponse chatbot">
            <img className="chatImage" src={gptImageLogo} />
            <p className="response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
        <div className="chatMessageContainer">
          <div className="chatMessage">
            <input type="text" placeholder="Message ChatGPT" />
            <button className="send">
              <img src={sendButton} alt="Send" />
            </button>
          </div>
          <p>ChatGPT can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
