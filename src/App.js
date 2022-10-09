
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import Main from './Layouts/Main';
import { productsAndCartLoader } from './Loaders/Produsts and cart loader';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '/order',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        }
      ]
    },


  ])


  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
