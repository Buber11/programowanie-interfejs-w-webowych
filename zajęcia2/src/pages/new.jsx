import { useState } from "react";
import ListItem from "../components/ListItem";

const New = ({todos}) =>{
    
    const [newTodo, setNewTodo] = useState("");

    const todosHTML = todos
        .map(it => <ListItem key = {it} text = {it} />);

    const handleNewTodo = () => {
        setTodos( todos.concat( [newTodo] ) );
        setNewTodo("");
    }

    return(
        <main>
            <input className="App-input" value={newTodo} 
            onChange={ (e) => setNewTodo(e.target.value) }></input>

            <button className="App-mini-button" onClick={handleNewTodo}>add new Todos</button>
            
          {todosHTML}  
        </main>
    )
}
export default New;