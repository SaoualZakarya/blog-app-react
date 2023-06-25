import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import useFetch from "./useFetch";
const Comment = ({theIdOfBlog}) => {

    const [comment,setComment] = useState('');
    const [author,setauthor]  = useState('');
    const [inputError, setInputError] = useState('');

    const handleDelete =  (commentId) =>{
        fetch(`http://localhost:8000/comments/${commentId}`,{
            "method":"DELETE"
        }).then(()=>{
            window.location.reload();
        })
    }

    const addComment = (e) => {
        if (!comment || !author) {
            setInputError('Please enter both comment and writer');
            return;
        }
        e.preventDefault();
        const commentInformation = {
            id: Date.now(),
            blogNumber: theIdOfBlog, // Use to provided the blog number
            author,
            content:comment
        }
        fetch('http://localhost:8000/comments', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(commentInformation)
        }).then(() => {
            setComment(''); // Reset the comment input
            setauthor(''); // Reset the author input
            window.location.reload() ;
        });
    }

    const {data , isPending , error } = useFetch("http://localhost:8000/comments");

    return ( 
    <div>
        <h1 className='text-[20px] text-center text-[#f1356d] mb-[10px]'>Comment</h1>
        <div className="flex flex-col mx-4">
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your comment"
                className="outline-none border-gray-200 border-2 text-gray-600 hover:border-gray-400 my-4 px-3 py-1  md:w-[350px]"
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setauthor(e.target.value)}
                placeholder="Enter your name"
                className="outline-none border-gray-200 border-2 text-gray-600 hover:border-gray-400 my-4 px-3 py-1  w-[150px]"
            />
            <button className="p-2 rounded-[10px] my-5 bg-green-500 w-fit text-white text-center"
            onClick={ addComment }
            >Add comment</button>
            {inputError && <p className="text-red-500 mb-4">{inputError}</p>}
        </div>
        <div className='mb-[100px]' >
            {error&& <div className="text-gray-500">{ error }</div>}
            {isPending && <div className="text-gray-500" > Loading ... </div> }
            {data && data.map((com) =>(
            com.blogNumber == theIdOfBlog ?  <div className='mb-5' key={com.id}>   {/* here i use == because when we add the blog number in the comment it's gonna be string type  */}   
                <h1 className='text-gray-400 text-[18px] my-2'>author: <span className='text-black'>{com.author}</span></h1>
                <p className='bg-gray-200 rounded-xl p-2 w-fit'>
                    {com.content}
                    <button
                    className="ml-2 px-1 rounded-[10px] my-5 bg-green-500 w-fit"
                    onClick={() => { handleDelete(com.id) }}
                    >
                    <FontAwesomeIcon className="text-white" icon={faTimes} />
                    </button>
                </p>
            </div> : null
        ))}
        </div>
    </div> );
}

export default Comment;