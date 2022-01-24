import logo from './logo.svg';
import './App.css';
import react from 'react';
import { Container, Row } from 'reactstrap';
import { Col } from 'reactstrap';
import Option from './components/Option';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes , Route} from 'react-router-dom';
import AllBooks from './components/AllBooks';
import Header from './components/Header';
import AddBook from './components/AddBook';
import Favourite from './components/Favourite';


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
            
            <Route exact path='/' element={< AllBooks />}></Route>
            <Route exact path='/books' element={< AllBooks />}></Route>
            <Route exact path='/add-book' element={< AddBook />}></Route>
            <Route exact path='/fav' element={< Favourite />}></Route>
               
          </Routes>
          </Col>
        </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
