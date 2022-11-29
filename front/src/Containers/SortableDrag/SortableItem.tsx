import React from 'react';
import { SortableElement } from 'react-sortable-hoc';


	
const items=['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
const SortableItem = (props:any) => {
    console.log(props.items)
    return (
    <li>{props.items}</li>
    )
  }
   
  export default SortableElement(SortableItem);