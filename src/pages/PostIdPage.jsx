import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostByID, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostByID(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
        <h1>Страница поста</h1>
        {isLoading
          ? <Loader />
          : <div>{post.id}. {post.title} {post.body}</div>
        }
        {isComLoading
          ? <Loader />
          : <div>{comments.map(comment => 
              <div style={{marginTop: '15px'}}>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>)}
            </div>}
        
        </div>
    )
}

export default PostIdPage;