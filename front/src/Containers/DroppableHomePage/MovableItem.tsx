import React from 'react';
//  import  useDrag  from 'react-dnd';

const MovableItem = (id:any, index:any) => {

    // const [{ isDragging }, drag] = useDrag({
    //     type: "text",
    //     item: () => {
    //       return { id, index }
    //     },
    //     collect: (monitor: any) => ({
    //       isDragging: monitor.isDragging(),
    //     }),
    //   })


  

    return (
        <div>
            We will move this item
        </div>
    )
}

export default MovableItem;
