import React, { useContext } from 'react'
import Post from './Post'
import {PostList as PostListData} from "../store/post-list-store";
export default function Post_List() {

  const {postList} = useContext(PostListData)
  return (
    <>

    {
      postList.map((post) =>(
        <Post key = {post.id} post ={post}>  </Post>

      ))
    }
    


    </>
   
  )
}
