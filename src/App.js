import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBookk from './components/DeleteBookk';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBook/>}/>
        <Route path='/searchbook' element={<SearchBook/>}/>
        <Route path='/deletebook' element={<DeleteBookk/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
