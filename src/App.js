
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname}>
      <Route path="/" element={<News pageSize={9} country="in" category="general" />} />
      <Route path="/business" element={<News pageSize={9} country="in" category="business" />} />
      <Route path="/entertainment" element={<News pageSize={9} country="in" category="entertainment" />} />
      <Route path="/health" element={<News pageSize={9} country="in" category="health" />} />
      <Route path="/science" element={<News pageSize={9} country="in" category="science" />} />
      <Route path="/sports" element={<News pageSize={9} country="in" category="sports" />} />
      <Route path="/technology" element={<News pageSize={9} country="in" category="technology" />} />
    </Routes>
  );
}

export default class App extends Component {
  render() {
    return (
      <>
      <div className="bg-dark">
        <Router>
          
          <Navbar />
          <AppRoutes />
        </Router>
        </div>
      </>
    );
  }
}