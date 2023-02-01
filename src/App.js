import logo from './logo.svg';
import './App.css';
import ProductProvider from './context/ProductProvider';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
