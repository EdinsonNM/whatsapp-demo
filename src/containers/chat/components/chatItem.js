import React from 'react'

export default function ChatItem({message}) {
    return (
    <div class="message-wrapper them" key={message.id}>
        <div class="circle-wrapper animated bounceIn">E</div>
        <div class="text-wrapper animated fadeIn">{message.text}</div>
    </div>
    );
}
