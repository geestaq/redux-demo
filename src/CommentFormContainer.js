import {connect} from 'react-redux';
import {addComment} from './actions';
import CommentForm from './CommentForm';

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(CommentForm);
