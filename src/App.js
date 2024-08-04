import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";

const App = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (!username || !password) return <LoginForm />;

  const handleNewMessage = (chatId, message) => {
    console.log("New message:", message);
  };

  return (
    <ChatEngine
      height="100vh"
      projectID="0915f0f3-e7ec-48dc-9fb7-5c1d3ff9abb1"
      userName={username}
      userSecret={password}
      renderChatFeed={(chatAppProps) => (
        <ChatFeed {...chatAppProps} onNewMessage={handleNewMessage} />
      )}
    />
  );
};

export default App;
