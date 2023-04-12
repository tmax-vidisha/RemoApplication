import React from 'react';


const Board = (props: any) => {
    const drop = (e: any) => {
        e.preventDefault();

        // key of the card to be fetched is passed
        const card_id = e.dataTransfer.getData('id_card');
        const card = document.getElementById(card_id);

        e.target.appendChild(card);

    }

    const dragOver = (e:any) => {
        e.preventDefault();
    }
    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}>
            {props.children}
        </div>
    );
};

export default Board;