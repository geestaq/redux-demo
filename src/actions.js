import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        payload: {
            id: uuid.v4(),
            text: text
        }
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        payload: {
            id: id
        }
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        payload: {
            id: id,
            text: text
        }
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        payload: {
            id: id
        }
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        payload: {
            id: id
        }
    }
}

export {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT,
  addComment,
  editComment,
  removeComment,
  thumbUpComment,
  thumbDownComment
};
