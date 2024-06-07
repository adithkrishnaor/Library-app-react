import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBookk from './components/DeleteBookk';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddBook/>
      <SearchBook/>
      <DeleteBookk/>
      <ViewAll/>
    </div>
  );
}

export default App;
