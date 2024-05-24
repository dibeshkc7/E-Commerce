
import { useParams } from "react-router-dom";
import PostDetail from "../../component/blog/post-details";

const SinglePost = () => {
    const params = useParams();
    const id = params.id;
    console.log(params);
    return <div>{id && <PostDetail id={Number(id)} />}</div>;
  };
  
  export default SinglePost;
  
