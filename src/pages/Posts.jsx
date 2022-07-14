import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import {
    useMatch
  } from "react-router-dom"
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount, getPagesArray } from "../utils/pages"
import '../styles/App.css';
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
//   let match = useMatch()  
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSeaarchPosts = usePosts(posts, filter.sort, filter.query)
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  useEffect(() => {fetchPosts(limit, page)}, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <>
      <div className="App">
        <button onClick={fetchPosts}>Получить посты</button>
        <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
          Создать пост
        </MyButton>
        <MyModal visible={modal}>
          <PostForm create={createPost} setVisible={setModal} />
        </MyModal>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError &&
          <h1>Произошла ошибка {postError}</h1>
        }
        {isPostsLoading
          ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
          : <PostList posts={sortedAndSeaarchPosts} title={'Список постов'} remove={deletePost} />
        }
        <Pagination 
          page={page}
          changePage={changePage}
          totalPages={totalPages} 
        />
      </div>
    </>
  );
}

export default Posts;