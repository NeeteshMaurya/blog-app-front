import React, { useState } from "react";
import { Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from 'react-router-dom'

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<any>("")

  const [redirect, setRedirect] = useState(false)

  async function createNewPost(e:any){
    const data = new FormData()
    data.set('title',title)
    data.set('summary',summary)
    data.set('content',content)
    data.set('file',files[0])
    e.preventDefault()
    const response = await fetch('http://localhost:8080/api/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  

  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <form className="post mt-2 mb-2" onSubmit={createNewPost}>
      <input type="text" placeholder="Title" 
        value={title} 
        onChange={e=>setTitle(e.target.value)}
        />
      <input type="text" placeholder="Summary"
        value={summary}
        onChange={e=>setSummary(e.target.value)} 
        />
      <input type="file"
       onChange={(e)=>setFiles(e.target.files)}
       style={{ color: "white", fontWeight: "bold" }} />
      <ReactQuill
        className="reactquill"
        value={content}
        onChange={newValue=>setContent(newValue)}
        modules={modules}
        formats={formats}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          background: "green",
          marginTop: "20px",
          marginBottom: "20px",
          width: "81%",
        }}
      >
        Create Post
      </Button>
    </form>
  );
};

export default CreatePost;
