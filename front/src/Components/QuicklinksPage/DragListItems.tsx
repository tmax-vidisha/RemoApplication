import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  font-weight: 500;
  text-align: start;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

interface IFolderProps {
  onClick?: (obj: any) => void;
  data: any,
  isLoading: any,
  isSuccess: any,
  userData: any,
  userLoading: any,
  userSuccess: any,
  item: any,
  provided: any,
  snapshot: any
}

const DragListItems: React.FC<IFolderProps> = (props: IFolderProps) => {
  const { data, isLoading, isSuccess, onClick, userData, userLoading, userSuccess, provided, snapshot } = props;
  return (
    <DragItem
      ref={data.innerRef}
      snapshot={snapshot}
      {...data.draggableProps}
      {...data.dragHandleProps}
    >
      <span>{data.id}</span>
      <CardFooter>
        <span>{data.content}</span>
      </CardFooter>
    </DragItem>
  );
};

export default DragListItems;
