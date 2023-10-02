import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const changeCellContent = (newCellValue, idxToUpdate) => {
    setCells((prevCell) =>
      prevCell.map((cell, idx) => (idx === idxToUpdate ? newCellValue : cell))
    );
  };

  const addNewNode = (idx) => {
    setCells((prevCell) => [
      ...prevCell.slice(0, idx + 1),
      "-",
      ...prevCell.slice(idx + 1),
    ]);
  };

  return (
    <>
      <h1 className="title">Add a Node</h1>
      <div className="cardParent">
        {cells.map((cell, idx) => (
          <div className="cell" key={idx}>
            <input
              className="input"
              type="text"
              maxLength={2}
              value={cell}
              onChange={(e) => changeCellContent(e.currentTarget.value, idx)}
            />
            {idx !== cells.length - 1 && (
              <span className="hiddenElem" onClick={() => addNewNode(idx)} />
            )}
          </div>
        ))}
      </div>
      <div className="finalText">{cells.join("")}</div>
    </>
  );
}

export default App;
