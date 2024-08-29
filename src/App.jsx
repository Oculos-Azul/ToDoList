import { useState } from "react";
import StyleGo from "./style/styles";
import Todo from "./components/Todo";
import Fom from "./components/Fom";

function App() {
    const [To, setTo] = useState([
        {
            id: 1,
            text: "criar funcionalidade x no sistema",
            categoria: "Trabalho",
            estado: false,
        },
        {
            id: 2,
            text: "Ir pra academia",
            categoria: "Pessoal",
            estado: false,
        },
        {
            id: 3,
            text: "Estudar React",
            categoria: "Estudos",
            estado: false,
        },
    ]);

    const AddTodo = (text, categoria) =>{
      const addTodo = [...To,
        {
          id: Math.floor(Math.random() * 10000),
          text, categoria, estado: false,
        }
      ]

      setTo(addTodo);
    };

    const DelDel = (id) => {
      const addTodo = [...To];
      const filter = addTodo.filter((To) => To.id !== id ? To : null);
      setTo(filter);

    };

    return (
        <div className="AB">
            <h1>Lista</h1>
            <Fom AddTodo={AddTodo}/>
            <div className="ToList">
                {To.map((todo) => (
                    <Todo key={todo.id} A={todo}  DelDel={DelDel}/>
                ))}
            </div>
            
            <StyleGo />
        </div>
    );
}

export default App;
