import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContexProvider } from './context/AuthContext';
import { ChatContexProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContexProvider>
    <ChatContexProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContexProvider>
  </AuthContexProvider>

);
