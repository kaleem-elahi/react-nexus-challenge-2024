import React, { useState, useEffect } from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import axios from 'axios';

const App = () => {
    const { state, signIn, signOut } = useAuthContext();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (state.isAuthenticated) {
            axios.get('http://localhost:5050/todos')
                .then(response => setTodos(response.data))
                .catch(error => console.error('Error fetching todos:', error));
        }
    }, [state.isAuthenticated]);

    return (
        <div>
            <h1>Todo App</h1>
            {state.isAuthenticated ? (
                <div>
                    <p>Hello, {state.username}</p>
                    <button onClick={() => signOut()}>Sign Out</button>
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id}>{todo.text}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <button onClick={() => signIn()}>Sign In</button>
            )}
        </div>
    );
};

export default App;