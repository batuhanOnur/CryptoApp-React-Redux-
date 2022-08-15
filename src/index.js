import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
<<<<<<< HEAD
=======
import 'antd/dist/antd.css';
>>>>>>> 99717bc (footer and homepage)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>    
)