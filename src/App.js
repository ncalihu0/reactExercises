import './styles/Navbar.css'
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';
import Taskdetail from './pages/Taskdetail';
import Tasklist from './pages/Tasklist';
import Head from './components/Head';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Head></Head>
        <nav className='mainNav'>
          <Link to='/Easy'>Easy</Link>
          <Link to='/Medium'>Medium</Link>
          <section className='dropdown'>
            <Link to='/Hard'>Hard</Link>
            <section className='dropdown-content'>
              <Link to="/Tasklist">Task List</Link>
              <Link to='/Taskdetail'>Task Detail</Link>
            </section>
          </section>
        </nav>
        <Routes>
          <Route path='/Easy' element={<Easy />}></Route>
          <Route path='/Medium' element={<Medium />}></Route>
          <Route path='/Hard' element={<Hard />}></Route>
          <Route path='/Tasklist' element={<Tasklist />}></Route>
          <Route path='/Taskdetail' element={<Taskdetail />}></Route>
        </Routes>


      </Router>


    </div>
  );
}

export default App;
