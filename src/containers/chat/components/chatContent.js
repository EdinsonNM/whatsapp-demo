import React from 'react'
import ChatItem from './chatItem';

export default function ChatContent({messages = []}) {
    return (
        <div className="inner" id="inner">
            <div className="content" id="content">
                {messages.map((message, index) =>
                    <ChatItem key={`message-${index}`} message={message}/>
                )}
               
            </div>
        </div>
    )
}
