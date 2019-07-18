import React from 'react';
import Comment from './CommentContainer';

const CommentList = ({comments}) =>
    <div>
        <h2>Komentarze</h2>
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    </div>;

export default CommentList;
