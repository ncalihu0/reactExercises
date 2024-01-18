import './styles/Navbar.css'
import Easy from './pages/Easy';
import Medium from './pages/Medium';
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
        </nav>

        <Routes>
          <Route path='/Easy' element={<Easy />}></Route>
          <Route path='/Medium' element={<Medium />}></Route>
        </Routes>


      </Router>


    </div>
  );
}

export default App;
