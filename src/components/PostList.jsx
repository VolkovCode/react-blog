import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = (props) => {
  console.log(props.posts)
  if (!props.posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <TransitionGroup>
        {props.posts.map((post, index) =>
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post">
        <PostItem number={index + 1} key={post.id} post={post} remove={props.remove}/>
        </CSSTransition> 
        )}
      </TransitionGroup>  
    </div>
  )
}

export default PostList;