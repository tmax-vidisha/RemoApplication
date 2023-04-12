import update from 'immutability-helper';
import type { FC } from 'react';
import { useCallback, useState } from 'react';
import CeoMessage from '../../Components/CeoMessage';
import { CardPage } from './CardPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HeroImages from './../../Components/HeroImages/index';
import CeoImage from './../../Assets/Images/CEO.svg';
import logo from './../../Assets/Images/logo.png';
import { CeoPage, EmpHighlightPage, EventsPage, HeroImagePage, MeetingsPage, NewsPage, RecentFilePage } from '../../Pages';
import { Grid } from '@mui/material';
import Gallery from '../../Components/Gallery';
import SocialMedia from '../../Components/SocialMedia';
import deleteIcon from '../../Assets/Images/delete.svg';
import SlideShowNews from '../../Components/News/SlideShowNews';
// import {ceo} from '../../Assets/Images/';


const style = {
    // width: "1000px",
    //  width: " 60%",
    // overflow: "hidden",
    // display: "flex",
    // justifyContent: "space-between",
    // marginLeft:"18px",
    marginRight: '5px',
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",


}

export interface Item {
    id: number
    text: JSX.Element;

}

export interface ContainerState {
    cards: Item[]
}




export const ContainerPage: FC = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: <Grid item xs={12} >
                    <HeroImagePage />
                </Grid>
            },
            {
                id: 2,
                text: <Grid item xs={12}><CeoPage /></Grid>,
            },
            {
                id: 3,
                text: <Grid item xs={12}> <MeetingsPage /></Grid>,
            },
            {
                id: 4,
                text: <Grid item xs={6}> <EmpHighlightPage /></Grid>,

            },
            {
                id: 5,
                text: <Grid item xs={10} style={{ marginTop: "-28px" }}>  <NewsPage /></Grid>,
            },
            {
                id: 6,
                text: <Grid item xs={8} >  <EventsPage /></Grid>,
            },
            {
                id: 7,
                text: <Grid item xs={6} style={{ marginTop: "-95px" }}>  <EventsPage /></Grid>,

            },
            {
                id: 8,
                text: <Grid item xs={4}><Gallery /> </Grid>,
            },
            {
                id: 9,
                text: <Grid item xs={4} style={{ marginTop: "-70px" }}><SocialMedia /> </Grid>,
            },
            {
                id: 10,
                text: <Grid item xs={4}> <RecentFilePage />  </Grid>,
            },
            {
                id: 11,
                text: <Grid item xs={6}> <SlideShowNews />  </Grid>,
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

            (card: { id: number; text: JSX.Element }, index: number) => {

                return (
                    <CardPage
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