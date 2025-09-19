import { Navigate, Route, Routes } from 'react-router-dom';
import CategoryList from './screens/CategoryList';
import ClassList from './screens/ClassList';
import Confirmation from './screens/Confirmation';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';

export default function App() {
  return (
    <div className='min-h-screen max-w-[420px] mx-auto'>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/categories' element={<CategoryList />} />
        <Route path='/classes/:type' element={<ClassList />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}
