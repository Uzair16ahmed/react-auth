import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import FreeComponent from './Components/FreeComponent';
import AuthComponent from './Components/AuthComponent';
import Account from './Account';

function App() {
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
        <Route exact path="/" component={Account}/>
        <Route exact path="/free" component={FreeComponent}/>
        <Route exact path="/auth" component={AuthComponent}/>
      </Routes>

    </Container>
  );
}

export default App;
