
import React from 'react';
import './styles/index.css';
import NavigationPanel from "./components/shared/NavigationPanel";
import BlogForm from "./components/core/pages/BlogForm";
import routes from './router/routes';

function App() {
    return (
        <div className="App">
            <NavigationPanel/>
            <div className="MainContent">

                <BlogForm/>
            </div>
        </div>
    );
}

export default App;