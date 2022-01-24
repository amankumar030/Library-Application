import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBooks from './components/AllBooks';
import Option from './components/Option';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Favourite from './components/Favourite';
import UpdateBook from './components/Update';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Container>
          <Row>
            <Col md={2}>
              <Option></Option>
            </Col>
            <Col md={10}>
              <Routes>
                <Route path="" element={<AllBooks />}></Route>
                <Route path="/books" element={<AllBooks />}></Route>
                <Route path="/add-book" element={<AddBook />}></Route>
                <Route path="/fav" element={<Favourite />}></Route>
                <Route path="/update" element={<UpdateBook />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
