import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
