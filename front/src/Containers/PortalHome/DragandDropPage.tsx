import React from 'react';
import { useState } from 'react';
import HeroImagePage from './../../Pages/HeroImagePage/HeroImagePage';
import { CeoPage, MeetingsPage } from '../../Pages';
import EmpHighlightPage from './../../Pages/EmployeeHighlightPage/EmpHighlightPage';
import NewsPage from './../../Pages/NewsPage/NewsPage';
import EventsPage from './../../Pages/EventsPage/EventsPage';
import Gallery from './../../Components/Gallery/index';
import SocialMedia from './../../Components/SocialMedia/index';
import RecentFilePage from './../../Pages/RecentFilesPage/RecentFilePage';
import SlideShowNews from '../../Components/News/SlideShowNews';
import Stack from '@mui/material/Stack';
import { List, Grid } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AnyAction } from '@reduxjs/toolkit';



const data =
  [
    {
      id: '1',
      text: <Grid item xs={12} ><HeroImagePage /></Grid>
    },
    {
      id: '2',
      text: <Grid item xs={12}><CeoPage /></Grid>,
    },
    {
      id: '3',
      text: <Grid item xs={12}> <MeetingsPage /></Grid>,
    },
    {
      id: '4',
      text: <Grid item xs={6}> <EmpHighlightPage /></Grid>,
    },
    {
      id: '5',
      text: <Grid item xs={10} style={{ marginTop: "-28px" }}><NewsPage /></Grid>,
    },
    {
      id: '6',
      text: <Grid item xs={8} ><EventsPage /></Grid>,
    },
    {
      id: '7',
      text: <Grid item xs={6} style={{ marginTop: "-95px" }}>  <EventsPage /></Grid>,
    },
    {
      id: '8',
      text: <Grid item xs={4}><Gallery /> </Grid>,
    },
    {
      id: '9',
      text: <Grid item xs={4} style={{ marginTop: "-70px" }}><SocialMedia /> </Grid>,
    },
    {
      id: '10',
      text: <Grid item xs={4}> <RecentFilePage />  </Grid>,
    },
    {
      id: '11',
      text: <Grid item xs={6}> <SlideShowNews />  </Grid>,
    },
  ]

 

  // fake data generator
  const getItems = (count:any, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k + offset}-${new Date().getTime()}`,
      content: `item ${k + offset}`
    }));
  
  const reorder = (list:any, startIndex:any, endIndex:any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  /**
   * Moves an item from one list to another list.
   */
  const move = (source:any, destination:any, droppableSource:any, droppableDestination:any) => {
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
  
  const getItemStyle = (isDragging:any, draggableStyle:any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  const getListStyle = (isDraggingOver:any) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
  });
  
  const DragandDropPage=()=> {
    const [state, setState] = useState([getItems(10), getItems(5, 10)]);
  
    function onDragEnd(result:any) {
      const { source, destination } = result;
  
      // dropped outside the list
      if (!destination) {
        return;
      }
      const sInd = +source.droppableId;
      const dInd = +destination.droppableId;
  
      if (sInd === dInd) {
        const items = reorder(state[sInd], source.index, destination.index);
        const newState = [...state];
        // @ts-ignore
        newState[sInd] = items;
        setState(newState);
      } else {
        const result = move(state[sInd], state[dInd], source, destination);
        const newState = [...state];
        // @ts-ignore
        newState[sInd] = result[sInd];
        // @ts-ignore
        newState[dInd] = result[dInd];
  
        setState(newState.filter(group => group.length));
      }
    }
  
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            setState([...state, []]);
          }}
        >
          Add new group
        </button>
        <button
          type="button"
          onClick={() => {
            setState([...state, getItems(1)]);
          }}
        >
          Add new item
        </button>
        <div style={{ display: "flex" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (
              <Droppable key={ind} droppableId={`${ind}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    {el.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around"
                              }}
                            >
                              {item.content}
                              <button
                                type="button"
                                onClick={() => {
                                  const newState = [...state];
                                  newState[ind].splice(index, 1);
                                  setState(
                                    newState.filter(group => group.length)
                                  );
                                }}
                              >
                                delete
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
      </div>
    );
  }
export default DragandDropPage;
