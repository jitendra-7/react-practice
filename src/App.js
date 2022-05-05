import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import About from './About'
import Contact from './Contact'
import Users from './Users'
import CreateUser from './CreateUser'
import Home from './Home'
import {Link,Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar href="/home"><Link to='/home'>Navbar</Link></Navbar>
          <Nav className="me-auto">
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/users'>List User</Link>
            <Link to='/createuser'>Create User</Link>
          </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/users' element={<Users/>}></Route>
          <Route exact path='/createuser' element={<CreateUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
