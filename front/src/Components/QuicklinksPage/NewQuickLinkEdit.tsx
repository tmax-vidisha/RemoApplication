import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStyles } from "./Styles";
import { useLocation } from 'react-router-dom';
import { Box, CircularProgress, Grid } from "@mui/material";
import add from "./../../Assets/Images/addmore.svg";
import deleteIcon from "./../../Assets/Images/delete.svg";



interface IFolderProps {
  onClick?: (obj: any) => void;
  data: any,
  isLoading: any,
  isSuccess: any,
  userData: any,
  userLoading: any,
  userSuccess: any,
}
// fake data generator
const getItems = (count: any, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`
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
const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  //   @ts-ignore
  result[droppableSource.droppableId] = sourceClone;
  //   @ts-ignore
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
  ...draggableStyle
});
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const NewQuickLinkEdit: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const { data, isLoading, isSuccess, onClick, userData, userLoading, userSuccess } = props
  let location = useLocation();
  console.log(location.state);
  const [show, setShow] = useState(true);
  const [selectedArray, setSelectedArray] = useState<any>([])
  const [users, setUsers] = useState([]);
  const [state, setState] = useState([getItems(10), getItems(5, 10)]);

  function onDragEnd(result: any) {
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
      //   @ts-ignore
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      //   @ts-ignore
      newState[sInd] = result[sInd];
      //   @ts-ignore
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
        Add Quicklinks Group
      </button>
      <button
        type="button"
        onClick={() => {
          setState([...state, getItems(1)]);
        }}
      >
       Add Quicklinks Item
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
                              <img src={deleteIcon} alt="" />
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
      <Grid className={classes.bigBox}>
        {userLoading && <CircularProgress />}
        {userSuccess && (
          <>
            {
              userData?.response.length > 0 ? userData?.response && userData?.response.map((item: any) => (

                <Box className={classes.boxIcon}>
                  <img src={item.Image} alt="" />
                  <p className={classes.iconTitle}>{item.LookupValue} </p>
                </Box>
              ))
                : <p>No User QuickLinks</p>
            }
          </>)}
        <Box className={classes.boxIcon} onClick={() => {
          setShow(!show);
          Object.freeze(data?.response);
          const arrCopy = [...data?.response];
          // @ts-ignore
          setUsers(arrCopy)
        }}>
          <img src={add} alt="" />
          <p className={classes.iconTitle}>Add QuickLinks </p>
        </Box>
      </Grid>
    </div>
  );
}

export default NewQuickLinkEdit;