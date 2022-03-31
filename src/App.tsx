import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { TopAppBar } from './components/organisms';
import AHTGTheme from './AHTGTheme';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={AHTGTheme}>
      <BrowserRouter>
        <TopAppBar />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
