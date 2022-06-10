import React, { useRef, useState } from 'react';
import Counter from './components/Counter.jsx';
import PostForm from './components/PostForm.jsx';
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

  const createPost=(newPost)=>{
    setPosts([...posts,newPost])
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Posts list:" />
    </div>
  );
}

export default App;
