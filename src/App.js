import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className="wrapper">
          <RouterProvider router={router} />

    </div>
  );
}

export default App;
