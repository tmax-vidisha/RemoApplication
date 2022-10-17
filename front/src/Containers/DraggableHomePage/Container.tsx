import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import CeoMessage from '../../Components/CeoMessage';
import { Card } from './Card';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HeroImages from './../../Components/HeroImages/index';
import CeoImage from './../../Assets/Images/CEO.svg';
import logo from './../../Assets/Images/logo.png';

const style = {
    width: 400,
    display: "flex",
    justifyContent: "space-between"
}

export interface Item {
    id: number
    text: string
}

export interface ContainerState {
    cards: Item[]
}

export const Container: FC = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Write a cool JS library',
               //src:<CeoMessage/>
            //    src:"./../../Components/HeroImages/index",
                // image:'./../../Assets/Images/logo.png',
            },
            {
                id: 2,
                text: 'Make it generic enough',
              //image:'./../../Assets/Images/CEO.svgg',
            },

        ])

        const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
            setCards((prevCards: Item[]) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex] as Item],
                    ],
                }),
            )
        }, [])

        const renderCard = useCallback(
            (card: { id: number; text: string  }, index: number) => {
                return (
                    <Card
                        key={card.id}
                        index={index}
                        id={card.id}
                        text={card.text}
                        moveCard={moveCard}
                    />
                )
            },
            [],
        )

        return (
            <div>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
                {/* <DndProvider backend={HTML5Backend}>
                    <CeoMessage />
                    <HeroImages />
                </DndProvider> */}
            </div>
        )
    }
}
