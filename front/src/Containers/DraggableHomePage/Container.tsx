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
import { CeoPage,HeroImagePage } from '../../Pages';
import { Grid } from '@mui/material';
// import {ceo} from '../../Assets/Images/'
const style = {
    width: 1150,
    display: "flex",
    justifyContent: "space-between",
    marginLeft:"18px",
    

}

export interface Item {
    id: number
    text:JSX.Element;

}

export interface ContainerState {
    cards: Item[]
}

export const Container: FC = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,

                text:<Grid item xs={12}><HeroImagePage /></Grid>,

            },
            {
                id: 2,

                text: <Grid item xs={12}><CeoPage/></Grid>,

            },

        ])

        const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
            //@ts-ignore
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

            (card: { id: number; text: JSX.Element  }, index: number) => {

                return (
                    <Card
                        key={card.id}
                        index={index}
                        id={card.id}
                        text={card.text}
                        //  data={card.data}
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
