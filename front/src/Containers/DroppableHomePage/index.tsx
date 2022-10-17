import React from 'react';
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CeoPage, HeroImagePage } from '../../Pages';

const DroppableHomePage = () => {
    return (
        <div className="container">
            {/* Wrap components that will be "draggable" and "droppable" */}
            <DndProvider backend={HTML5Backend}>
                <HeroImagePage />
                <CeoPage />
            </DndProvider>
        </div>
    );
};

export default DroppableHomePage;