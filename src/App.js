import React from 'react';
import './App.css';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';
import DevTools from './DevTools';

const App = () => {
    return (
        <div className="App">
            <CommentListContainer/>
            <CommentFormContainer/>
            <DevTools/>
        </div>
    );
};

export default App;
