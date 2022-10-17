import React from 'react';
import { useDrag } from 'react-dnd';

const MovableItem = (id:any, index:any) => {
    const [{ isDragging }, drag] = useDrag({
        type: "text",
        item: () => {
          return { id, index }
        },
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      })


    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} className='movable-item' style={{ opacity }}>
            We will move this item
        </div>
    )
}

export default MovableItem;
