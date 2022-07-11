import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';

function App() {
  
  const [posts, setPosts] = useState([{id: 1, title: 'Jacascript', body: 'Контента не завзли(('},
  {id: 2, title: 'Java', body: 'Контента не завзли(('},
  {id: 3, title: 'Python', body: 'Контента не завзли(('},])
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <>
    <div className="App">
      <form>
        <MyInput 
          type='text' 
          placeholder='Название поста' 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput 
          type='text' 
          placeholder='Текст поста'
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={e => addNewPost(e)}>Опубликовать</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов'} />
    </div>
    </>
  );
}

export default App;
