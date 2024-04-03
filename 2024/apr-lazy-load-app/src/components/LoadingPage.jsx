import { useEffect, useState } from "react"

export default function LoadingPage() {

    const[todos, setTodos] = useState([{}]);

    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Server returned ' + response.status);
          }
          return response.json();
        })
        .then(data => {
            setTodos(data);
            console.log(data)
        })
        .catch(error => {
          console.error('There was a problem with the Fetch operation:', error);
        });

        }, [])

    return (
        <>
        <h2>Loaded Notes</h2>
        {
            todos.slice(0,10).map((todo, index) => ( 
                <div key={index}>
                    <p>{todo.id} {todo.title}</p> 
                </div>
            ))
        }
        </>
    )
}