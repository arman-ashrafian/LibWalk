import React from 'react';
import '../css/App.css';
import login_screen from "./login";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {login_screen()}
            </header>
        </div>
    );
}



export default App;
