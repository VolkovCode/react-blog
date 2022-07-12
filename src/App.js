import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Jacascript', body: 'цгукшцушмонтента не завзли((' },
    { id: 2, title: 'Java', body: 'ываываыв((' },
    { id: 3, title: 'Python', body: 'Контента не завзли((' },
    { id: 4, title: 'Python', body: 'Аонтента не завзли((' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const getSortedPosts = () => {
    console.log('отработала')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].toLowerCase().localeCompare(b[filter.sort].toLowerCase()))
    }
    return posts
  }

  const sortedPosts = useMemo(() => getSortedPosts(), [filter.sort, posts])
  const sortedAndSeaarchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <>
      <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
          Создать пост 
        </MyButton>
        <MyModal visible={modal}>
          <PostForm create={createPost} setVisible={setModal}/>
        </MyModal>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList posts={sortedAndSeaarchPosts} title={'Список постов'} remove={deletePost} />

      </div>
    </>
  );
}

export default App;
