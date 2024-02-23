import { all } from '../store';
import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos = useSelector(all);

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    );
}

export default TodoList;
