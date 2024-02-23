import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { count } from './store';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector(count);

  return (
    <div className="container">
      <Header count={todos} />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
