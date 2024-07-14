import React, { useEffect, useState } from 'react';
import { createHashRouter } from 'react-router-dom';

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        const data = await response.json();
        console.log('API Response:', data); // Log the entire response for debugging
        const chatData = data;
        setChats(chatData.data.data);

        console.log(chatData.data.data)
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching chats:', error);
        // setLoading(false);
      }
    };

    fetchChats();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="chat-list">
      
      {
        chats.map((chat)=>{
          return(
            <div key={chat.id} onClick={() => onSelectChat(chat.id)} className="chat-item">
          {chat.creator.name}
        </div>
          )
        })
      }
    </div>
  );
};

export default ChatList;
