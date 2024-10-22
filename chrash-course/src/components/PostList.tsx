import classes from './Post.module.css';
import Post from './Post.tsx';
import NewPost from './NewPost.tsx';
import { useState } from 'react';
import Modal from './Modal.tsx';

function PostList({ isPosting, onStopPosting }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function changeBody(event) {
    setText(event.target.value);
  }

  function changeAuthor(event) {
    setAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onBodyChange={changeBody} onAuthorChage={changeAuthor} />
        </Modal>
      )}

      <ul className={classes.post}>
        <Post author={author} body={text} />
        <Post author='hss' body='react b' />
      </ul>
    </>
  );
}

export default PostList;
