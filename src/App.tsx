import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import CreatePost from './pages/CreatePost';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/create'} element={<CreatePost />} />
        <Route path={'/postdetail/:id'} element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
