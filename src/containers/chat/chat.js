import React from 'react';
import '../../styles/chat.css';
import ChatContent from './components/chatContent';
const ChatApp = () => (
    <div>
        <ChatContent messages={[{text: 'hola mundo!!'}]}/>
    </div>
);
export default ChatApp;