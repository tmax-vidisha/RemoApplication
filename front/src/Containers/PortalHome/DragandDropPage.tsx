import React from "react";
import { useState } from "react";
import HeroImagePage from "./../../Pages/HeroImagePage/HeroImagePage";
import { CeoPage, MeetingsPage } from "../../Pages";
import EmpHighlightPage from "./../../Pages/EmployeeHighlightPage/EmpHighlightPage";
import NewsPage from "./../../Pages/NewsPage/NewsPage";
import EventsPage from "./../../Pages/EventsPage/EventsPage";
import Gallery from "./../../Components/Gallery/index";
import SocialMedia from "./../../Components/SocialMedia/index";
import RecentFilePage from "./../../Pages/RecentFilesPage/RecentFilePage";
import SlideShowNews from "../../Components/News/SlideShowNews";
import Stack from "@mui/material/Stack";
import { List, Grid } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AnyAction } from "@reduxjs/toolkit";

const data = [
  {
    id: "1",
    text: <HeroImagePage />,
    xs: 8,
  },
  {
    id: "2",
    text: <CeoPage />,
    xs: 4,
  },
  {
    id: "3",
    text: <MeetingsPage />,
    xs: 12,
  },
  {
    id: "4",
    text: <EmpHighlightPage />,
    xs: 8,
  },
  {
    id: "5",
    text: <NewsPage />,
    xs: 4,
  },
  {
    id: "6",
    text: <EventsPage />,
    xs: 4,
  },
  {
    id: "7",
    text: <EventsPage />,
    xs: 4,
  },
  {
    id: "8",
    text: <Gallery />,
    xs: 8,
  },
  {
    id: "9",
    text: <SocialMedia />,
    xs: 4,
  },
  {
    id: "10",
    text: <RecentFilePage />,
    xs: 4,
  },
];

// fake data generator
const getItems = (count: any, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  // @ts-ignore
  result[droppableSource.droppableId] = sourceClone;
  // @ts-ignore
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

const DragAndDropPage = () => {
  const [state, setState] = useState(data);

  function onDragEnd(result: any) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const items = Array.from(state);
    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);

    setState(items);
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Grid container spacing={2}>
                {state.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Grid item xs={item.xs}>
                          {item.text}
                        </Grid>
                      </div>
                    )}
                  </Draggable>
                ))}
              </Grid>
              {/* {provided.placeholder} */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragAndDropPage;
