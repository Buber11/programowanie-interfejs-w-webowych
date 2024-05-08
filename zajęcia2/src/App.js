import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import New from './pages/new';
import App from './pages/app';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    "zrobić pranie",
    "zrobić pizze",
    "napisać inzynierkę"
  ]);

  return (

      <App/>
    // <div className="App">
    //   <header className="App-header">
    //     Todo app
    //   </header>

    //   <div className="main-nav-cointainer">
    //       <nav>
    //         <a>Home</a>
    //         <a>New</a>
    //       </nav>

    //       <Home todos= {todos} />
    //       <New todos={todos}/>

    //     </div>

    //     <footer>a to jest stopka</footer>

    // </div>
  );
}

export default App;
