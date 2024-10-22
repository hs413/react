import classes from './Post.module.css';
import Post from './Post.tsx';
import NewPost from './NewPost.tsx';
import Modal from './Modal.tsx';
import { useState } from 'react';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts(post => [postData, ...post]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.post}>
        {posts.map(post => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
