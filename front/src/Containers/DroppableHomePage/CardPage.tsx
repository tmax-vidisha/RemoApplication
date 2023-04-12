import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypesNew } from './ItemTypesNew'
import { Grid } from '@mui/material';

const style = {
    border: '1px dashed white',
   // padding: '0.5rem 1rem',
    margin: '5px',
    height: "50%",
    backgroundColor: 'white',
    //cursor: 'move',
    cursor: 'pointer',
   //padding: "5px",
    //    display:"grid",
    //     gridTemplateColumn:"repeat(2, 1fr)",
    // display: "flex",
    // justifyContent: "space-around"

}

export interface CardProps {
    id: any
    text: JSX.Element
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
    index: number
    id: string
    type: JSX.Element
}

export const CardPage: FC<CardProps> = ({ id, text, index, moveCard }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: ItemTypesNew.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypesNew.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        //$ts-ignore
        <div >
            <Grid>
                <Grid ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
                    {text}
                </Grid>
            </Grid>

        </div>
    )
}