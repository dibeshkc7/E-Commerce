
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface IPost {
    userId: number,
    id: number,
    title:string ,
    body: string
  }
  
  const Post = () => {
    const [post, setPost] = useState<IPost[]>([])
  
    useEffect(() => {
  
      const getPost = async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          const post = await res.json();
          console.log(post)
          setPost(post)
        } catch (error: any) {
          console.log(error)
        }
      }
  
      getPost();
  
    }, [])
  
    console.log(post)
  
    return (
      <div className="grid grid-cols-4 gap-10 p-10">
        {
          post.map((post) => (
            <div key={post.id} className="border p-5 rounded-lg space-y-5">
              <div className="flex items-center justify-center">
                <img src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=1024x1024&w=is&k=20&c=nP1hJR8pdUnI2bl1822mokIDtXQB_5cntElWFC6UYRg=" alt={post.title} className="h-32 w-32" />
              </div>
              <div className="border-t mt-2">
                
                <p className="line-clamp-1">{post.title}</p>
                
              </div>
              <div>
                <Link className="bg-red-500 text-white px-4 py-2 rounded-lg " to={`/Post/${post.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  
  export default Post
