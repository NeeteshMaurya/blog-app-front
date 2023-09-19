import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {Link} from 'react-router-dom';

interface POST {
  _id: String,
  title:String,
  summary: String,
  cover: File,
  content:string,
  author:String,
  createdAt: Date
}

function PostDetails() {
  const [postInfo,setPostInfo] = useState<POST>();
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
          console.log(postInfo)
        });
      });
  }, []);

  if (!postInfo) return (
    <div>

    </div>
  );
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>

      <div className="image">
        <img src={`http://localhost:8080/${postInfo.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  );
}

export default PostDetails