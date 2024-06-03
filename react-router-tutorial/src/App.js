
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate }  from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const Dashboard = () => {

  const navigate = useNavigate();

 const handleNavigate = () => {

      navigate('/login')

 }


  return <>
    <h2>Dashboard</h2>
    <button onClick={handleNavigate}>Redirect</button>
  </>;
}

function Login ()  {
  return <h2>Login</h2>;
}


function UserProfile({match}) {
  const userId = match.params.id;

  return(
      <div>
         <h2>User Profile</h2>
         <p>User ID: {userId}</p>
      </div>

  );

}


 function App () {
  const [loggedIn, ] = useState(false);
  return (
       <>
       <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="contact">Contact</Link>
            </nav>

            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />

              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/login" element={<Login/>} />

              <Route path="/user/:id" element={<UserProfile/>} />
            </Routes>

          </div>
     </Router>
  
       
       </>           
         
  );
}; 

export default App;


