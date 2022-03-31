import { Routes as Router, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { EditHospital, Main, NotFound } from './components/pages';

const Routes = () => (
  <Router>
    <Route
      path='/hospital/:id'
      element={
        <Container maxWidth='lg'>
          <EditHospital />
        </Container>
      }
    />
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
