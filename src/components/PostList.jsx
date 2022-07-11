import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
        {props.posts.map((post, index) => 
        <PostItem number={index + 1} key={post.id} post={post} />
        )}
    </div>
  )
}

export default PostList;