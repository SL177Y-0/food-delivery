/* import React, { Component } from 'react';
import Home from "./components/HomeComponent.js";
import About from "./components/AboutComponent.js";
import Contact from "./components/ContactComponent.js";
import Menu from './components/MenuComponent.js';
import Header from './components/HeaderComponent.js';
import Footer from './components/FooterComponent.js';

import { DISHES } from './shared/dishes';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {

    return (

      <Router>
          <div className="App">
            <Header />
                <Routes>
                  <Route path='/home' element={ <Home />} />
                  <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                  <Route exact path='/about' element={ <About />} />
                  <Route exact path='/contact' element={ <Contact />} />
                </Routes>
            <Footer />
          </div>
      </Router>

    );
  }
}

export default App;
 */


import React, { useState, useEffect } from 'react';
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  let [dishes, setDishes] = useState([]);
    useEffect(()=>{
      const fetchUsers = async()=>{
        const response = await fetch('http://localhost:8000/getdishes');
        const data = await response.json();
        setDishes(data);
      };
      fetchUsers();
    }, [])


  return (

    <Router>
        <div className="App">
          <Header />
          <div className="main-content">
              <Routes>
                <Route exact path='/home' element={ <Home />} />
                <Route exact path='/menu' element={<Menu dishes={dishes} />} />
                <Route exact path='/about' element={ <About />} />
                <Route exact path='/contact' element={ <Contact />} />
                <Route exact path='/login' element={ <Login />} />
                <Route exact path='/register' element={ <SignUp />} />
              </Routes>
              </div>
          <Footer />
        </div>
    </Router>

  )
}
