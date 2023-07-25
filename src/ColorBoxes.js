import React, { useState } from 'react';
import './ColorBoxes.css';

const ColorBoxes = ({ colors, boxCount }) => {
  const [boxes, setBoxes] = useState(colors.slice(0, boxCount));
  const [changedBoxIndex, setChangedBoxIndex] = useState(null);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleChangeColor = () => {
    const randomIndex = Math.floor(Math.random() * boxCount);
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      const newColor = getRandomColor();
      newBoxes[randomIndex] = newColor;
      return newBoxes;
    });
    setChangedBoxIndex(randomIndex);
  };

  return (
    <div className="color-boxes">
      {boxes.map((color, index) => (
        <div key={index} className="color-box" style={{ backgroundColor: color }}>
          {changedBoxIndex === index && <div className="changed-label">changed!</div>}
        </div>
      ))}
      <button onClick={handleChangeColor}>Change</button>
    </div>
  );
};

export default ColorBoxes;
