import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create})=>{
    const [post, SetPost] = useState({title: '', body: ''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost={
            ...post, id: Date.now()
        }
        create(newPost)
        SetPost({title: '',body: ''})
      }
    return (
        <form>
        {/*управляемый компонент*/}
        <MyInput 
        value={post.title}
        onChange = {e => SetPost({...post, title: e.target.value})}
        type="text"
        placeholder="Название поста"/>
        <MyInput 
        value={post.body}
        onChange = {e=>SetPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton> 
      </form>
    );
};

export default PostForm;