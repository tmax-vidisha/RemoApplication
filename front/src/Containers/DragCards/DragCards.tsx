import React from 'react';

const DragCards = (props: any) => {
    const dragStart = (e: any) => {
        const target = e.target
        e.dataTransfer.setData('card_id', target.id);

    }

    const dragOver = (e: any) => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}>
            {props.children}
        </div>
    );
};

export default DragCards;