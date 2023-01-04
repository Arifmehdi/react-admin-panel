import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

function App() {
  return (
    <div className="wrapper">
          <RouterProvider router={router} />

    </div>
  );
}

export default App;
