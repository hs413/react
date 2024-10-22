import classes from './NewPost.module.css';
import { useState } from 'react';
import Modal from '../components/Modal.tsx';
import { Link } from 'react-router-dom';

function NewPost({ onCancel, onAddPost }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function changeBody(event) {
    setText(event.target.value);
  }

  function changeAuthor(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: text,
      author,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' required rows={3} onChange={changeBody} />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' required onChange={changeAuthor} />
        </p>
        <p className={classes.actions}>
          <Link type='button' to='..'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
