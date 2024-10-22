import './App.css';
import PostList from './components/PostList.tsx';
import MainHeader from './components/MainHeader.tsx';
import { useState } from 'react';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }
  function hideModalHandler() {
    setModalVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={modalVisible} onStopPosting={hideModalHandler} />
    </>
  );
}

export default App;
