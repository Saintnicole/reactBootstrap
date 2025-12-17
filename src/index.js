// Import React (needed to create React components)
import React from 'react';

// Import ReactDOM to render the app into the browser DOM
import ReactDOM from 'react-dom/client';

// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Import custom global CSS
import './index.css';

// Import the main App component
import App from './App';

// Create a root where the React app will be mounted
// This targets the <div id="root"></div> in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  // React.StrictMode helps detect potential problems in development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
If you want to start measuring performance in your app,
you can pass a function to log results (for example: reportWebVitals(console.log))
or send the data to an analytics service.

Learn more here:
https://bit.ly/CRA-vitals
*/
