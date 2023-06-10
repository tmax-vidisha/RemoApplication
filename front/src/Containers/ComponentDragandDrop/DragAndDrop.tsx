import React, { useState } from 'react';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event:any) => {
    setDragging(true);
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (event:any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
  };

  const handleDragOver = (event:any) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        id="drag-source"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Drag me
      </div>
      <div
        id="drop-target"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: dragging ? '2px dashed red' : 'none' }}
      >
        Drop here
      </div>
    </div>
  );
};

export default DragAndDrop;
