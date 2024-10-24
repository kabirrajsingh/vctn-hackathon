import React, { createContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [messages, setMessages] = useState([]);

  const createNewSession = useCallback(async () => {
    try {
      const response = await axios.post('https://debasmitroy.pythonanywhere.com/create-session', {});
      const newSessionId = response.data.session_id; // Adjust based on the actual server response
      console.log('New session created:', newSessionId); // Log the new session ID
  
      setSessions((prevSessions) => [...prevSessions, newSessionId]);
      setCurrentSessionId(newSessionId);
      setMessages([]); // Clear messages for a new session
    } catch (error) {
      console.error('Error creating new session:', error);
    }
  }, []);
  
  // Create a new session when the provider mounts
  useEffect(() => {
    createNewSession();
  }, [createNewSession]);

  return (
    <SessionContext.Provider value={{ createNewSession, sessions, currentSessionId, messages, setMessages }}>
      {children}
    </SessionContext.Provider>
  );
};
