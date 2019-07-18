import React from 'react';

const CommentForm = ({addComment}) =>
    <form>
        <h3>Dodaj komentarz</h3>
        <input type='text' name='commentText' placeholder="Komentarz" />
        <button onClick={(event) => {
            event.preventDefault();
            const content = document.querySelector('input[name=commentText]').value;
            if(content !== '') addComment(content);
        }}>Zapisz</button>
    </form>

export default CommentForm;
