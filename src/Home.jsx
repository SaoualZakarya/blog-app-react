import useFetch from "./useFetch";
import Bloglist from "./Bloglist";

const Home = () => {
    const {data: blogs , isPending , error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div className="text-gray-500">{ error }</div>}
            {isPending && <div className="text-gray-500" > Loading ... </div> }
            {blogs && <Bloglist blogs={blogs} title="all  the blogs"/> }
        </div>
    );
}

export default Home;
