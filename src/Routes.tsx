import { Routes as Router, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Main, NotFound } from './components/pages';

const Routes = () => (
  <Router>
    <Route
      path='/'
      element={
        <Container maxWidth='lg'>
          <Main />
        </Container>
      }
    />
    <Route
      path='*'
      element={
        <Container className='main-content' maxWidth='lg'>
          <NotFound />
        </Container>
      }
    />
  </Router>
);

export default Routes;
