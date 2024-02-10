import React, { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import AlertMsg from './AlertMsg'

import Sentiment from 'sentiment';
const sentiment = new Sentiment();

const Posts = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  
  let scores = -4;
  let res = 0;
  const [open, setOpen] = React.useState(false);
  const notify = () => toast.warn("Negative content alert! Need Help?");
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
    
  }, []);
for(var i=0; i<posts.length; i++){
  const result = sentiment.analyze(posts[i].desc);
  res += result.score

  
}

if(res < scores){
  notify()
 
}
  


  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  return (
    <div className="Posts">
      <ToastContainer position="top-center" onClick={() => {console.log("U have clicked")}}/>
      {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
