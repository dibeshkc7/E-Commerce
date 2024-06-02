
import { useEffect, useState } from "react";
import { IPost } from "../../interface/post";

interface Props {
  id: number,
  }
  
  const PostDetail = ({ id }: Props) => {
    const [post, setPost] = useState<IPost>();
  
    useEffect(() => {
      const postDetail = async () => {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1${id}`);
          const Post = await res.json();
          console.log(post);
          setPost(post);
        } catch (error: any) {
          console.log(error);
        }
      };
      postDetail();
    }, [id]);
    return (
      <div>
        <div className="border p-5 rounded-lg space-y-5">
          <div className="flex items-center justify-center">
            <img
              src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=1024x1024&w=is&k=20&c=nP1hJR8pdUnI2bl1822mokIDtXQB_5cntElWFC6UYRg="
              alt={post?.title}
              className="h-32 w-32"
            />
          </div>
          <div className="border-t mt-2">
            
            <p className="line-clamp-1">{post?.title}</p>
            <p className="line-clamp-1">{post?.body}</p>
            
          </div>
          <div></div>
        </div>
      </div>
    );
  };
  
  export default PostDetail;
  
