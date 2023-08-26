import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourase from './components/AddCourse';
import Menus from './components/Menus';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const btnHandle = () => toast.error("done", { position: 'top-center' })
  return (

    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Home />
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-courses" Component={AddCourase} exact />
                <Route path="/view-courses" Component={Allcourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App;
