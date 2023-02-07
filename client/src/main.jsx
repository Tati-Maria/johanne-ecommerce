import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  RouterProvider, 
  Route, 
  createRoutesFromElements, 
  createBrowserRouter } 
  from 
  'react-router-dom';
import { Provider } from 'react-redux';
import HomeLayout from './layout/HomeLayout';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import ErrorElement from './pages/404';
import Home from './pages/Home';
//redux store
import { store } from './redux/store';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='favorites' element={<Favorites/>} />
      <Route path='products' element={<Products />}>
        <Route path='*' errorElement={<NotFound />} />
      </Route>
      <Route path='products/:id' element={<Product />} />
      <Route path='*' element={<ErrorElement />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <ToastContainer limit={1} />
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
