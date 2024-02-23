import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store';

let nextId = 3;

function TodoForm() {
    const [show, setShow] = useState(false);
    const [newTodo, setNewTodo] = useState({ id: null, name: '', done: false });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewTodo({ ...newTodo, name: e.target.value });
    }

    const save = () => {
        dispatch(add({ ...newTodo, id: ++nextId }));
        setNewTodo({ ...newTodo, name: '' });
        setShow(false);
    }

    if (!show) {
        return <input type="button" value="Ajouter" onClick={() => setShow(true)} />;
    }

    return (
        <form>
            <input type="text" value={newTodo.name} onChange={(e) => handleChange(e)} />
            <div class="grid">
                <button class="secondary" type="button" onClick={() => setShow(false)}>Annuler</button>
                <button type="button" onClick={save}>Ajouter</button>
            </div>
        </form>
    );
}

export default TodoForm;
