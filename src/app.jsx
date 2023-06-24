import React, { useState, useEffect } from 'react';
import { Router, Link } from "wouter";
import PageRouter from "./components/router.jsx";


function App() {

  return (
    <Router>
      <main role="main">
        <div className="content">
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}


export default App;