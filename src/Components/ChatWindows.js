import React, { useEffect, useState } from 'react';

const ChatWindows = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log(chatId)
      try {
        if (chatId) {
          const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch messages');
          }
          const data = await response.json();
          setMessages(data.data);
          console.log(data.data)
          // Assuming data is an array of messages
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [chatId]);

  return (
    <div className="chat-window">
      {
        messages.map((message,index)=>{
          return(
            <div key={index} className="message">
            <p>{message.message}</p>
          </div>
          )
        })
      }
       
    </div>
  );
};

export default ChatWindows;
