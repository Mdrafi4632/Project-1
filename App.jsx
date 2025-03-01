import Board from "./Board";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img
          src="Pictures/mainCup.jpg"
          alt="Coffee Cup"
          className="coffee-banner"
        />
        <h1>Coffee Shops NYC</h1>
        <p className="subtitle">
          Discover the best coffee spots in the city, recommended by the
          community!
        </p>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a coffee shop..."
        />
      </header>
      <Board />
    </div>
  );
}

export default App;
