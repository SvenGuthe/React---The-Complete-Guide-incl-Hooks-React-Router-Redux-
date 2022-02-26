import './App.css';
import NewTodo from './components/todo/NewTodo';
import Todos from './components/todo/Todos';
import TodosContextProvider from './store/todos-context';

function App() {

  

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
