import './styles/Navbar.css'
import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';
import Tasklist from './pages/Tasklist';
import Head from './components/Head';
// import { useState } from 'react'
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
            <Link to="/Tasklist">Task List</Link>
            <section className='dropdown-content'>
              <Link to='/Hard'>Hard</Link>
            </section>
          </section>
        </nav>
        <Routes>
          <Route path='/Easy' element={<Easy />}></Route>
          <Route path='/Medium' element={<Medium />}></Route>

          <Route
            path="/Tasklist"
            element={<Tasklist></Tasklist>}
          ></Route>
          <Route
            path="/Hard"
            element={
              <Hard

              />
            }
          ></Route>
          <Route path="/Tasklist" element={<Tasklist />}></Route>
        </Routes>


      </Router>


    </div>
  );
}

export default App;

//tried to do routing of two pages, one display the info, the other you can add a task. The task is added but it doesn't display on the other page
// function App() {
//   const [todos, setTodos] = useState([]);
//   const addTodo = (newTodo) => {
//     setTodos([...todos, newTodo]);
//   { setInputValue, setDescription }
//   };
//   const deleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };
//   const editTodo = (todo) => {
//     deleteTodo(todos.indexOf(todo));
//     setInputValue(todo[0]);
//     setDescription(todo[1]);
//   };

//   return (
//     <div className="App">
//       <Router>
//         <Head></Head>
//         <nav className='mainNav'>
//           <Link to='/Easy'>Easy</Link>
//           <Link to='/Medium'>Medium</Link>
//           <section className='dropdown'>
//             <Link to="/Tasklist">Task List</Link>
//             <section className='dropdown-content'>
//               <Link to='/Hard'>Hard</Link>
//             </section>
//           </section>
//         </nav>
//         <Routes>
//           <Route path='/Easy' element={<Easy />}></Route>
//           <Route path='/Medium' element={<Medium />}></Route>

//           <Route
//             path="/Tasklist"
//             element={<Tasklist addTodo={addTodo}  ></Tasklist>}
//           ></Route>
//           <Route
//             path="/Hard"
//             element={
//               <Hard
//               todos={todos}
//               addTodo={addTodo}
//               handleDelete={deleteTodo}
//               editTodo={editTodo} 
//               />
//             }
//           ></Route>
//           <Route path="/Tasklist" element={<Tasklist />}></Route>
//         </Routes>


//       </Router>


//     </div>
//   );
// }

// export default App;

