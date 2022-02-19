import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './../comments/CommentsList';

const Comments = () => {
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments, error } = useHttp(getAllComments)

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest])

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
    setIsAddingComment(false);
  }, [quoteId, sendRequest]);

  let comments;

  if (status === 'pending') {
    comments = <div className='centered'><LoadingSpinner /></div>
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && ( !loadedComments || loadedComments.length === 0 )) {
    comments = <p className='centered'>No comments were entered yet.</p>
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
