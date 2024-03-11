import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { PostList } from '../store/post-list-store';

export default function Post({ post }) {

    const {deletePost} = useContext(PostList)


  return (
    <div className="card post-card" style={{ width: "30rem" }}>

      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">

        <h5>

          {post.title}

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
          onClick={()=> deletePost(post.id)}  
          
          >
          <MdDeleteForever />
   
  </span>
        </h5>
        <p className="card-text"> {post.body}</p>
        {post.tags.map(tag=> <span key={tag} className="badge rounded-pill text-bg-primary hashtag">  {tag}</span>)}

        <div className="alert alert-success reactions" role="alert">
  This post has been reacted by {post.reactions} people
</div>
       
      </div>
    </div>
  )
}
