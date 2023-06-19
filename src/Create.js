import { useState } from "react";
import {useHistory} from "react-router-dom"
const Create = () => {
    const [title,setTitle] = useState('') ;
    const [author,setAuthor] = useState('mario') ;
    const [body,setBody] = useState('') ;
    const [isPending,setIsPending] = useState(false);
    const history = useHistory() ;

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog ={title,body,author};
        setIsPending (true);

        fetch('http://localhost:8000/blogs',{
            method:'POST' ,
            headers:{"Content-type":"application/json"},
            body : JSON.stringify(blog)
        }).then(()=>{
            setIsPending (false);
            history.push('/');
        })
    }

    return ( 
        <div className="create text-gray-400 "> 
            <h2 className="text-center text-green-500 text-[22px] "> Add new blog </h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col ">
                <label> Blog title : </label>
                <input 
                type="text" 
                required
                placeholder="Title"
                value={title}
                className="outline-none border-gray-200 border-2 text-gray-600 hover:border-gray-400 m-4 px-3 py-1  md:w-[350px]"
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label >Blog body :</label>
                <textarea
                required
                placeholder="body"
                value={body}
                className="outline-none border-gray-200 border-2 text-gray-600 hover:border-gray-400 m-4 h-28 px-3 py-1  md:w-[350px]"
                onChange={(e)=> setBody(e.target.value)}
                />
                <label >Blog author :</label>
                <select
                value={author}
                className="outline-none border-gray-200 border-2 text-gray-600 hover:border-gray-400 m-4 px-3 py-1  md:w-[350px]"
                onChange={(e)=> setAuthor(e.target.value)}
                >   
                    <option value="zaki">zaki</option>
                    <option value="safi">safi</option>
                    <option value="mohammed">mohammed</option>
                </select>
                { !isPending && <button className="p-2 rounded-[10px] my-5 bg-green-500 w-fit text-white text-center mx-auto ">Add blog</button>}
                { isPending && <button disabled className="p-2 rounded-[10px] my-5 bg-green-500 w-fit text-white text-center mx-auto "> adding blog ... </button>}
                </div>
            </form>
        </div>
    );
}

export default Create;
