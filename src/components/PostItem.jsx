import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const delPost = (e) => {
    e.preventDefault()
    props.remove(props.post)
  }

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>

      </div>
      <div className="post__btn">
        <MyButton onClick={delPost}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem;