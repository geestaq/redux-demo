import React from 'react';
import './App.css';
import CommentListContainer from './CommentListContainer';
import CommentFormContainer from './CommentFormContainer';

const App = () => {
    return (
        <div className="App">
            <CommentListContainer/>
            <CommentFormContainer/>
        </div>
    );
};

export default App;
