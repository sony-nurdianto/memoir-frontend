import React from 'react';
import ReactDom from 'react-dom';
import './style.css'


export default function App(): JSX.Element {
    return (
        <div>
            <h1 className="test">App Working</h1>
        </div>
    )
}

const root = document.getElementById('app-root');
ReactDom.render(<App />, root)
