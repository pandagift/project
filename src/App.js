import React, { useRef, useState } from 'react';
import Counter from './components/Counter.jsx';
import PostItem from './components/PostItem.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import MyInput from './components/UI/input/MyInput.jsx';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript', body: 'Description' },
  ]);
  const [title, setTitle] = useState('')
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          placeholder='Name' />
        <MyInput
          ref={bodyInputRef}
          type='text'
          placeholder='Description' />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list:" />
    </div>
  );
}

export default App;
