import React from 'react';
import { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import SortableList from './SortableList';
import { SortEndHandler } from 'react-sortable-hoc';

interface type{
    onSortEnd?: SortEndHandler;
}

const DragandDrop = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

    const onSortEnd = ( oldIndex:any, newIndex:any,items: any, ) => {
        setItems(prevItem => ( arrayMoveImmutable(prevItem, oldIndex, newIndex)));
    };

    return (
        <div>

            {/* <SortableList items={`${items}`} onSortEnd={onSortEnd} /> */}
        </div>
    );
};

export default DragandDrop;