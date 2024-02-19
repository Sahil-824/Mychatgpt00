import React from 'react'
import "../styles/LeftSection.css"
import myImage from '../assets/nouserlogo.png';
import gptLogo from '../assets/chatgptlogo.png'


const LeftSection = () => {

    const allChats = [
        {
            id: 1,
            chatName: 'This is sample Chat 1 for chatgpt...'
        },
        {
            id: 2,
            chatName: 'This is sample Chat 2 for chatgpt...'
        },
        {
            id: 3,
            chatName: 'This is sample Chat 3 for chatgpt...'
        },
        {
            id: 4,
            chatName: 'This is sample Chat 4 for chatgpt...'
        },
        {
            id: 5,
            chatName: 'This is sample Chat 5 for chatgpt...'
        }
    ]
    return (
        <div className="leftSection">
            <div className="newChat">
                <div>
                    <img src={gptLogo} alt="ChatGPT" height={50}  width={50}/>
                    <p className="text1">New chat</p>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>

            </div>
            <div className="allChats">
                {allChats.map(chat => (
                    <div key={chat.id} className="chat">
                        <p className="text1">{chat.chatName}</p>

                    </div>
                ))}
            </div>
            <div className="newChat">
                <div>
                    <img src={myImage} alt="ChatGPT" width="50" height="50" />
                    <p className="text1">Sahil Panchal</p>
                </div>

            </div>

        </div>
    )
}

export default LeftSection