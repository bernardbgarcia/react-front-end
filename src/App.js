import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
// BrowserRouter is assigned to Router for shortername. BrowserRouter wraps all the routes. 
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import AppNavbar from './components/AppNavbar';
import ImageUpload from './components/ImageUpload';
import Courses from './pages/Courses';
import Products from './pages/Products';
import AllProductsAdmin from './pages/AllProductsAdmin';
import AllUsers from './pages/AllUsers';
import Carts from './pages/Carts';
import CourseView from './pages/CourseView';
import ProductView from './pages/ProductView';
import ProductEdit from './pages/ProductEdit';
import ProductView2 from './pages/ProductView2';
import Home from './pages/Home';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
// import Register2 from './pages/Register2';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import ProfileSection from './components/ProfileSection';
import ProductSectionAdmin from './components/ProductSectionAdmin';
import Logout from './pages/Logout';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import { UserProvider } from './UserContext';


function App() {

  // useState 
  // State hook for the user state that's defined here for a global scope.
  const[user, setUser] = useState({
    //email: localStorage.getItem('email')
    id: null,
    isAdmin: null,
    userImageUrl:null
  })

  // Function for clearing localStorage on logout
  const unsetUser = () => {
    localStorage.clear();
  }

  
  useEffect(() => {
    fetch(`${ process.env.REACT_APP_API_URL }/users/details`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }

    })
    .then(res => res.json())
    .then(data => {

      if(typeof data._id !== "undefined") {

          
      setUser({
          id: data._id,
          isAdmin: data.isAdmin,
          userImageUrl: data.userImageUrl
        })

      } else {

        setUser({
          id: null,
          isAdmin: null
        })

      }

    })

  }, [])

  return (
    //useState wrapper to pass the state values
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
      <AppNavbar/>
      <Container>
      <Routes>
       {/* Router - parent component for the endpoint components such as route
       routes - responsible to render component, routes is previously switch */} 
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/allproductsadmin" element={<AllProductsAdmin/>} />
        <Route path="/allusers" element={<AllUsers/>} />
        <Route path="/carts" element={<Carts/>} />
        <Route path="/courses/:courseId" element={<CourseView/>} />
        <Route path="/api/products/:productId" element={<ProductView/>} />
        <Route path="/api/products/:productId" element={<ProductEdit/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profilesection" element={<ProfileSection/>} />
        <Route path="/productsectionadmin" element={<ProductSectionAdmin/>} />
        <Route path="/imageupload" element={<ImageUpload/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer/>
      </Container>
    </Router>

    </UserProvider>


  );
}

export default App;
