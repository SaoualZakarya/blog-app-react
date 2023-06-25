import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import NotFound from './NotFound'
export default function App() {

  return (
    <Router>
      <div className="App px-[100px] lg:px-[300px]">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
    
  )
}
