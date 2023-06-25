import {useParams,useHistory} from 'react-router-dom'
import useFetch from './useFetch';
import Comment from './Comment';

const BlogDetails = () => {

    // get the blog id dynamic
    const { id } = useParams();
    // fetch the blog data from the local server
    const {data: blog , isPending , error } = useFetch(`http://localhost:8000/blogs/`+id);
    const history = useHistory() ;

    const handleDelete = () => {
        Promise.all([
          fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
          }),
          fetch('http://localhost:8000/comments/?blogNumber=' + blog.id, {
            method: 'DELETE',
          }),
        ])
          .then(() => {
            history.push('/');
          })
          .catch((error) => {
            console.error('Error deleting the blog and comments:', error);
          });
      };
      

    return ( 
        <div>
            <h2 className='text-[20px] my-2'> Blog details </h2>
            {error && <div className="text-gray-500"> { error } </div>}
            {isPending && <div className="text-gray-500" > Loading ... </div> }
            {blog && ( <article>
                <h2 className="text-[20px] text-center text-[#f1356d] mb-[10px]" >{blog.title}</h2>
                <div className="my-5   md:w-[500px] mx-auto">{blog.body}</div>
                <p className='text-gray-400'>Written by : {blog.author}</p>
                <button onClick ={handleDelete} className='p-2 rounded-[10px] my-5 bg-green-500 w-fit text-white text-center'> delete </button>
            </article>) }
            <div>
                <Comment theIdOfBlog={id} />
            </div>
        </div>

    );
}

export default BlogDetails;