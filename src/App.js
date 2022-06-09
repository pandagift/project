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
  const [post, setPost] = useState({title:'',body:''})

  const addNewPost = (e) => {
    e.preventDefault()
    
setPosts([...posts,{...post,id: Date.now()}])
setPost({title:'',body:''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post,title: e.target.value})}
          type='text'
          placeholder='Name' />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post,body: e.target.value})}
          type='text'
          placeholder='Description' />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list:" />
    </div>
  );
}

export default App;
