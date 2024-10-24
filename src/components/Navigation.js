import React, { useContext, useEffect } from 'react';
import { SessionContext } from '../contexts/SessionContext';

export default function Navigation() {
  const { createNewSession, sessions, currentSessionId } = useContext(SessionContext);

  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-8 text-white">Navigation</h2>
      <ul className="space-y-4">
        <li className="hover:bg-gray-800 hover:text-red-500 transition duration-300 cursor-pointer p-3 rounded-lg text-white">
          <button onClick={createNewSession} className="w-full text-left">
            New Session
          </button>
        </li>
      </ul>

      <div className="mt-8">
        <h3 className="text-white">Current Session:</h3>
        <p className="text-gray-300">{currentSessionId || 'No session active'}</p>
      </div>
    </div>
  );
}
