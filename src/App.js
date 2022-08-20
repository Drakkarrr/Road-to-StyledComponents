import './App.css';
import Button from './components/Button';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    font-size: 4rem;
  font-family: 'Roboto', sans-serif;
  }
  body {
  background-color: black;

  }
`


function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <Button/>
    </div>
    </>
  );
}

export default App;

