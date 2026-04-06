import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initReporter } from '@issueres/reporter';

// ── Initialize IssueRes Visual Reporter ──
// This is the core magic! It adds the FAB bug button to the bottom-right.
initReporter({
  repo: { 
    owner: 'pranav-cholleti', // Or your target org
    name: 'IR3'               // Or your target repo
  },
  apiEndpoint: 'http://localhost:4000/api/report',
  environment: {
    branch: 'main',
    commitHash: 'demo-hash-12345',
    name: 'Development'
  },
  // Optional: Capture custom app state for the agent
  getAppState: () => ({
    user: { id: 'user_987', role: 'admin', subscription: 'premium' },
    isDemoMode: true,
    lastSync: new Date().toISOString()
  })
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
