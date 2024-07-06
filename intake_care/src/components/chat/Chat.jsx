import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

import useSubscriptionStatus from '../../hooks/useSubscriptionStatus';

const socket = io('http://localhost:9002');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const subscriptionStatus = useSubscriptionStatus(user.token);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('sendMessage', input);
    setInput('');
  };

  const renderChatInterface = () => (
    <div className="p-6 bg-slate-800 rounded-lg shadow-lg max-w-md mx-auto mb-8 mt-5">
      <h2 className="text-white mb-4">Chat with Nutrition Professional</h2>
      <div className="bg-white p-4 rounded-lg mb-4 h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index} className="text-black mb-2">{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4"
        placeholder="Type your message"
      />
      <button onClick={sendMessage} className="block w-full bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out py-2 text-center">
        Send
      </button>
    </div>
  );

  const renderSubscribeButton = () => (
    <div className="p-8 bg-slate-800 rounded-lg shadow-lg max-w-lg mx-auto mb-8 mt-5 min-h-[350px] flex flex-col justify-between">
      <div>
        <h2 className="text-white mb-4 text-3xl font-semibold">Chat Subscription Required</h2>
        <p className="text-white mb-2 text-lg">Subscribe to access the chat feature.</p>
      </div>
      <Link
        to="/payment"
        className="block w-full bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out py-2 text-center"
      >
        Subscribe Now for Exclusive Access
      </Link>
    </div>
  );

  const renderLoading = () => (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center text-white">
        <p className="text-2xl mb-4">Waiting for professional to connect...</p>
        <div className="inline-block relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-300 border-t-transparent rounded-full animate-spin">....</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />

      <h1 className="text-center mb-6 text-1xl font-extrabold text-white md:text-1xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
      Chat With
    </span>
    <span className="text-emerald-700"> Professional</span>.
    </h1>

    <p className="text-lg font-serif font-bold text-sky-800 lg:text-xl mx-4">
  Connect directly with health professionals through our chat feature. Get personalized advice, ask questions, and receive expert guidance to support your health and wellness journey. Start a conversation today and take a proactive step towards better health.
</p>



      {subscriptionStatus === null ? renderLoading() : subscriptionStatus === true ? renderChatInterface() : renderSubscribeButton()}
      <Footer />
    </>
  );
};

export default Chat;
