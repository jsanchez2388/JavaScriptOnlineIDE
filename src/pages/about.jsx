import * as React from "react";
import { Router, Link } from "wouter";
import "../styles/bootstrap.css";
import "../styles/styles.css";


export default function About() {

  return (
    <div className="wrapper">
      <div className="banner">
        <h1 className="h1">JavaScript Online IDE</h1>
      </div>
      <div className="btn btn-secondary" style={{ float: "right" }}>
        <Link style={{ color: "white" }} href="/">
          Return to Editor
        </Link>
      </div>
      <h1 className="h1">About this site</h1>

      <p className="lead">
        This application provides an interactive online tool, similar to a
        notepad, where users can write, run, and download JavaScript code
        directly in their web browser. The interface includes a text editor
        field where users can write code, a button to execute this code, and an
        area to display the result. It's like having a mini computer programming
        platform right in your browser, specifically designed for writing
        JavaScript code.
      </p>

      <p className="lead">
        When a user has written their code in the text editor and presses the
        'Run Code' button, the application will display the results underneath
        the editor. If any mistakes are made in the code, the application will
        also show the error messages here. Additionally, users can download
        their code to their computer by clicking the 'Download Source Code'
        button. This prompts them to enter a name for their file, after which it
        will be downloaded to their device. The overall design of the
        application is aimed at being user-friendly and convenient for anyone
        interested in writing and running JavaScript code.
      </p>
      
      <h2 className="h2">Documentation</h2>
      <p><a href="https://react.dev/" className="link-success">Getting Started - React</a></p>
      <p><a href="https://codemirror.net/docs/" className="link-success" >CodeMirror</a></p>
      <p><a href=" https://reactjs.org/tutorial/tutorial.html" className="link-success" >Building a Basic React App</a></p>
    </div>
  );
}
