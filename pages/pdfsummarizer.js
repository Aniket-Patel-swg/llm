import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import GeneralSideBar from '../Components/GeneralSidebar.js';
import styles from '../styles/pdfsummarizer.module.css'

const pdfsummarizer = () => {
    const [messages, setMessages] = useState([
        { text: 'Hi there!', sender: 'user' },
        { text: 'Hello! How can I assist you today?', sender: 'bot' },
        { text: 'Can you provide more information about your services?', sender: 'user' },
        { text: 'Sure! We offer a variety of services, including...', sender: 'bot' },
        { text: 'That sounds interesting. How much does it cost?', sender: 'user' },
        { text: 'Our pricing varies based on the specific service and package you choose. Do you have a specific service in mind?', sender: 'bot' },
        // Add more messages as needed
    ]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        // Add the user's message to the list of messages
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        // Clear the input field
        setNewMessage('');

        // TODO: Send the new message to your API endpoint
        // ...

        // For testing purposes, let's simulate a bot response after a delay
        setTimeout(() => {
            setMessages([...messages, { text: 'I received your message!', sender: 'bot' }]);
        }, 500);
    };
    return (
        <>
            <GeneralSideBar />
            <div className={styles.summarizer}>
                <div className={styles.chat_bot_container}>
                    {messages.map((message, index) => (
                        <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                            {message.text}
                        </div>
                    ))}
                    <div className={styles.chat_input}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default pdfsummarizer;