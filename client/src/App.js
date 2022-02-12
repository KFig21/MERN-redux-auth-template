/* eslint-disable react/jsx-pascal-case */
// imports
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { loadUser } from "./store/actions/authActions";
import "./App.scss";
// pages
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
// themes
import { ThemeProvider } from "styled-components";
import SC from "./themes/StyledComponents";
import lightThemeDefault from "./themes/LightTheme_Default";
import darkThemeDefault from "./themes/DarkTheme_Default";
import Signup from "./pages/Auth/Signup";

function App() {
  const [theme, setTheme] = useState(darkThemeDefault);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <div className="App">
          {user._id && <Nav />}
          <SC.mainContent className="main">
            <Routes>
              {user._id ? (
                <Route exact path="/" element={<Home />}></Route>
              ) : (
                <>
                  <Route exact path="/" element={<Login />}></Route>
                  <Route exact path="/register" element={<Signup />}></Route>
                </>
              )}
            </Routes>
          </SC.mainContent>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
