import {Link } from 'react-router-dom'
const Bloglist = ({blogs,title}) => {

    return ( 
        <div className="blog-list">
            <h1 className="  text-[25px] capitalize"> { title} </h1>
            {blogs.map( (blog) => (
                <div className="blog_preview my-3 px-5 py-2 hover:drop-shadow-[0_0_60px_green] hover:border-solid hover:border-r-2 hover:border-b-2 hover:border-green w-fit" key={blog.id}>
                    <Link to= {`/blogs/${blog.id}`} > 
                        <h3 className="py-2  text-green-500 text-[22px]"> {blog.title} </h3>
                        <p className="text-[15px] text-gray-500"> written by :{blog.author } </p>
                    </Link>
                </div>
            )) }
        </div>
    );
}


export default Bloglist;