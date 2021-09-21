
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './About';
import { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode hase been enabled", "success");
      // document.title = "TextUtils-Dark Mode";

    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode hase been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  }

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
          <Textform heading="Try TextUtils - word counter, character counter, Remove extra spaces" mode={mode} showAlert={showAlert} />
        </Route>
        <Route exact path="/about">
          <About mode= {mode}/>
        </Route>
      </Switch>
      </Router>

    </>
  );
}

export default App;
