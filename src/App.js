import "./App.css";
import logo from "./logoGit.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App-footer">
          <small>Coded by Maryanne McGlone</small>
        </footer>
      </div>
    </div>
  );
}
