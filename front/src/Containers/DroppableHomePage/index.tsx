import React from 'react';
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CeoPage, HeroImagePage } from '../../Pages';
import { ContainerPage } from './ContainerPage';


const DroppableHomePage = () => {
    return (
        <div>
            {/* Wrap components that will be "draggable" and "droppable" */}
            {/* <DndProvider backend={HTML5Backend}>
                <HeroImagePage />
                <CeoPage />
            </DndProvider> */}
             <ContainerPage/>   
        </div>
    );
};

export default DroppableHomePage;