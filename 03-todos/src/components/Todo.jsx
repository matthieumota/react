import { useDispatch } from 'react-redux';
import { edit, remove, toggle } from '../store';
import { useState } from 'react';

function Todo({ todo }) {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);

    return (
        <div className="grid todo-grid">
            <input type="checkbox" role="switch" checked={todo.done} onChange={() => dispatch(toggle(todo.id))} />
            {!editing && <span onDoubleClick={() => setEditing(true)}>{todo.name} ({todo.id})</span>}
            {editing &&
                <input type="text" value={todo.name}
                    onChange={(e) => dispatch(edit({ id: todo.id, name: e.target.value }))}
                    onBlur={() => setEditing(false)}
                />
            }
            <span onClick={() => dispatch(remove(todo.id))} role="button" className="secondary">
                X
            </span>
        </div>
    );
}

export default Todo;
