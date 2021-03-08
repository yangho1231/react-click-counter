import "./styles.css";
import ArrayCounts from "./component/arrayCounts";

export default function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="colorArrays">
        <ArrayCounts />
      </div>
    </div>
  );
}
