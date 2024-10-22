import classes from './Post.module.css'
import Post from "./Post.tsx";
import NewPost from "./NewPost.tsx";

function PostList() {
  return (
      <>
        <NewPost />
        <ul className={classes.post}>
          <Post author='hs' body='react'/>
          <Post author='hss' body='react b'/>
        </ul>
      </>
  )

}

export default PostList