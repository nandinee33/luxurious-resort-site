import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RoomProvider} from "./context"

ReactDOM.render(
    <React.StrictMode>
    
      <RoomProvider>
        <Router>
          <App />
        </Router>
      </RoomProvider>
      
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
