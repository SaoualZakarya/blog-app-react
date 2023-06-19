import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar flex items-center justify-between py-8">
            <h1 className="text-green-600 text-[20px] md:text-[30px] ">zakarya</h1>
            <div className="links text-[#ccc] flex gap-4 items-center">
                <Link to="/">Home</Link>
                <Link to="/create"> New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar ;