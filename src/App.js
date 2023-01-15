import { useRef, useState } from "react";

function App() {
    var [todoList, setTodoList] = useState([])

    const input = useRef()

    return (
        <div className="container">
            <h1>Bacon Tracker</h1>
            <input type="text" placeholder="Enter The Bacon" ref={input}/>
            <button onClick={() => setTodoList([...todoList, input.current.value])} className="ml">Submit</button>
            <ul>
                {todoList.map(todo => <li key={todoList.indexOf(todo)}>{todo}</li>)}
            </ul>
        </div>
    )
}

export default App;
