// Import necessary dependencies from React and Wouter libraries.
import * as React from "react";
import { Link } from "wouter";

// Import the necessary CSS files for styling.
import '../styles/styles.css';
import '../styles/bootstrap.css';

// Define the Banner component which acts as the header for the IDE page.
export default function Banner() {
  return (
    <div>
      {/* Display the website's title in a banner */}
      <div className="banner">
        <h1 className="h1">JavaScript Online IDE</h1>
      </div>
      
      {/* Navigation bar */}
      <div className="nav">
        {/* Label for the source code editor */}
        <h2 className="h3">Source Code:</h2>

        {/* Link to the about page */}
        <div className="btn btn-secondary">
          {/* Using Wouter's Link component for navigation */}
          <Link style={{ color: 'white'}} href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
