import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatList from './Components/ChatList';
import ChatWindow from './Components/ChatWindows';
import Header from './Components/Headers';
import './App.css';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Router>
      <Header />
      <div className="app-container">
        <ChatList onSelectChat={setSelectedChat} />
        {selectedChat && <ChatWindow chatId={selectedChat} />}
      </div>
    </Router>
  );
};

export default App;
