import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FreeComponent from './Components/FreeComponent';
import AuthComponent from './Components/AuthComponent';
import Account from './Account';
import ProtectedRoutes from './ProtectedRoutes';


function App() {
  // const navigate=useNavigate()
  // navigate("auth")
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Routes>
        <Route exact path="/" Component={Account}/>
        <Route exact path="/free" Component={FreeComponent}/>
        <Route element={<ProtectedRoutes path="/auth"/>} />
      </Routes>

    </Container>
  );
}

export default App;
