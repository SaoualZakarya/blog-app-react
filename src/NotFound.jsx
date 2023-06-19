import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="text-center ">
            <h2 className='my-6 text-2xl'> sorry</h2>
            <p className='my-6'>that page cannot be found </p>
            <Link to='/' className='my-6 text-green-400'> Back to the main page ... </Link>
        </div>
    );
}

export default NotFound;