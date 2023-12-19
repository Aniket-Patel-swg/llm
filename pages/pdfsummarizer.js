import React, { useState, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import GeneralSideBar from '../Components/GeneralSidebar.js';
import styles from '../styles/pdfsummarizer.module.css'
import jsPDF from 'jspdf';
// import { useSpeechRecognition } from 'react-speech-recognition';

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
    const [file,setFile] = useState(null);

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

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const saveChatAsPDF = () => {
        const pdf = new jsPDF();
    
        // Define the starting y-coordinate for the text
        let y = 10;
    
        // Iterate through messages and add them to the PDF
        messages.forEach((message) => {
            const formattedMessage = `${message.sender}: ${message.text}`;
            pdf.text(formattedMessage, 10, y);
            y += 10; // Increment the y-coordinate for the next line
          });
      
          // Save the PDF with a filename based on the current date and time
          const currentDate = new Date();
          const fileName = `chat_data_${currentDate.toISOString()}.pdf`;
      
          pdf.save(fileName);
      };

    return (
        <>
            <GeneralSideBar />

            <div className={styles.summarizer}>
                <div className={styles.top_chat_section}>
                    <p>Isolated Falcons</p>

                    <section className={styles.top_section_options}>
                        <button>Delete Vector DB</button>
                        <button onClick={saveChatAsPDF}>Save Current Chat</button>
                    </section>
                </div>
                <div className={styles.chat_bot_container}>
                    {messages.map((message, index) => (
                        <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
                            {message.text}

                            {message.sender == "bot" ? <>
                            <br />
                            <br />
                                <button>/Visualize</button>
                                <button>/Summarize</button>
                            </> : <></>}
                        </div>
                    ))}
                    <div className={styles.chat_input}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className={styles.text_input}
                        />
                        <input
                            type="file"
                            accept=".txt, .pdf"
                            onChange={handleFileChange}
                            className={styles.file_input}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default pdfsummarizer;