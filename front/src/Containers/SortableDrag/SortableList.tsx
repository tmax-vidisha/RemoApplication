import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './SortableItem';




const SortableList = (props: any,) => {
    return (
        <div>
            <ul>
                {/* @ts-ignore */}
                {/* {props.items.map((value: any, index: any) => ())} 
                 <SortableItem key={`item-${index}`} index={index} value={value} />*/}
            </ul>
        </div>
    );
};

export default SortableContainer(SortableList);