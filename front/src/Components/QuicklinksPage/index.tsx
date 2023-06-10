//@ts-nocheck
import React from 'react';

import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs, Icon, CircularProgress } from '@mui/material';

import { Paper } from '@mui/material';
import IconText from './../Header/IconText';
import { useStyles } from './Styles';
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";
import add from "./../../Assets/Images/addmore.svg";
import hub from "./../../Assets/Images/hub.svg";
import dragDrop from "./../../Assets/Images/dragdropIcon.svg";
import { useLocation } from 'react-router-dom';
import birthday from "../../Assets/Images/girl.jpg";
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuickLinks from './../Quicklinks/index';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragListItems from './DragListItems';
import deleteIcon from "./../../Assets/Images/delete-round.svg";


interface IFolderProps {
    onClick?: (obj: any) => void;
    data: any,
    isLoading: any,
    isSuccess: any,
    userData: any,
    userLoading: any,
    userSuccess: any,
    onDelete?: (id: string) => void;
    //onDelete: (itemId: number) => void;
}
// const QuicklinksPage = () => {
const QuicklinksPage: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const { data, isLoading, isSuccess, onClick, userData, userLoading, userSuccess } = props;
    let location = useLocation();

    console.log(location.state);

    const itemList = [
        {
            id: 0,
            icon: vehicle,
            text: 'Vehicle'
        },
        {
            id: 1,
            icon: ITService,
            text: 'IT Service'
        },
        {
            id: 2,
            icon: sales,
            text: 'Sales'
        },
        {
            id: 3,
            icon: hub,
            text: 'Hub'
        },
        {
            id: 4,
            icon: admin,
            text: 'Admin'
        },
        {
            id: 5,
            icon: add,
            text: 'Quicklnks'
        },

    ]
    const [show, setShow] = useState(true);
    const [showResult, setShowResult]=useState(false)
    const handleClickShow = () => {
        setShowResult(true);
    }
    console.log(data?.response, 'tytrytrraa')

    const [selectedArray, setSelectedArray] = useState<any>([])
    const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     // const www = Object.freeze(data?.response )
    //     // console.log(www,'yyyss')
    //     //     let umounted = false
    //     //    setTimeout(()=>{
    //     //          console.log("ggdgdg")
    //     //        if(!umounted){
    //     //     const arrData =      Object.freeze(data?.response ?? []);
    //     // // const arrData = [...data?.response]
    //     // console.log(arrData,'htrhrthrthr')
    //     setUsers(data?.response)
    //     //    }
    //     // },1000)
    //     // return ()=>{
    //     //     umounted = true
    //     // }
    //     // setUsers(data?.response)

    // }, []);
    console.log(users, 'jtyjt')
    // const handleClick1 = (i: any) => {
    //     const tempArray = [...selectedArray]
    //     //@ts-ignore
    //     if (tempArray[i] == i) { tempArray[i] = undefined }
    //     //@ts-ignore
    //     else { tempArray[i] = i }

    //     setSelectedArray(tempArray)
    //     console.log(selectedArray,'yhythtysw')
    // }
    const handleChange = (e: any) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map((user: any) => {

                return { ...user, isChecked: checked };
            });
            let basketballPlayers = tempUser.filter(function (student) {
                return student.isChecked == true;
            }).map(function (student) {
                return student.id;
            })
            console.log(basketballPlayers)
            //@ts-ignore
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user: any) =>
                user.id === name ? { ...user, isChecked: checked } : user
            );
            console.log(tempUser)
            let basketballPlayers = tempUser.filter(function (student) {
                return student.isChecked == true;
            }).map(function (student) {
                return student.id;
            })
            console.log(basketballPlayers)
            setSelectedArray(basketballPlayers)
            //@ts-ignore
            setUsers(tempUser);
            // console.log(name)
        }
    };
    const handleSubmitData = () => {
        const Data = {
            title: 'vidisha.a@tmax.in',
            Ids: selectedArray
        }
        onClick?.(Data)
    }
    const onDragEnd = (result) => {
        const newItems = Array.from(items);
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems);
    };
   
  
    const deleteDriveItem = async (id: string, name: string) => {
        console.log(id, name)
        const Data = {
            // name:id,
            ItemId: id,
            title: item.LookupValue,
            image:item.image,
        }
        await sendDeleteItem(Data)
    }
    
    function handleRemove(id) {
        const newList = userData?.response.filter((item) => item.id !== id);
        console.log(newList, 'uuuuuuuuuuuuuuuu')
      }
    return (
        <div>
            <IconText />
            <Container className={classes.contentEditorWidth}>
                <Card className={classes.cardHeight} elevation={0}>
                    <Paper className={classes.innerBackground}>
                        <div className={classes.innerBannerOverlay}></div>
                        <Paper className={classes.contentHeader} elevation={0}>
                            <Typography className={classes.breadcrumbs} variant="h6">

                                <Link className={classes.breadLinks} color="inherit" href="/">
                                    QuickLinks
                                </Link>
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                <Breadcrumbs
                                    className={classes.breadcrumbs}
                                    separator={<NavigateNextIcon fontSize="small" />}
                                    aria-label="breadcrumb">
                                    <Link className={classes.breadLinks} color="inherit" href="/">
                                        Home
                                    </Link>
                                    <Link className={classes.breadLinks} color="inherit" href="/">
                                        <Typography> QuickLinks  </Typography>
                                    </Link>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>

                        <Grid item xs={12} className={classes.addBox}>
                            <Grid item xs={4}>
                                <p className={classes.addedText}>Added QuickLinks</p>
                            </Grid>
                            <Grid item xs={8}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p className={classes.dragText}><img src={dragDrop} alt="" />you can drag and drop to change position</p>
                                    <Button style={{ color: "white", backgroundColor: "#009BAD", padding: "4px", height: "30px", margin: "22px" }} onClick={handleSubmitData}>Apply</Button>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid className={classes.bigBox}>
                            {userLoading && <CircularProgress />}
                            {userSuccess && (
                                <>
                                    {
                                        userData?.response.length > 0 ? userData?.response && userData?.response.map((item: any) => (
                                            <Box className={classes.boxIcon}  onClick={handleRemove}>
                                                <img src={item.Image} alt="" />
                                                {showResult && 
                                                <div className={classes.deleteContent}><img src={deleteIcon} alt="" className={classes.deleteBox} /></div>
                                                }
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
                                setUsers(arrCopy)

                            }}>
                                <img src={add} alt="" onClick={handleClickShow}/>
                                <p className={classes.iconTitle}>Add QuickLinks </p>
                            </Box>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>
                        <Grid className={classes.addBox}>
                            <p className={classes.addedText}>QuickLinks</p>
                            <p className={classes.dragText}>Select any 5 links to show in a Home page</p>
                        </Grid>
                        {show ?
                            <Grid item xs={12} className={classes.bigBox} >
                                {/* <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                                {items.map((item, index) => (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => (
                                                            <DragListItems
                                                                provided={provided}
                                                                snapshot={snapshot}
                                                                item={item}
                                                            />
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext> */}
                                {/* <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="droppable"> */}
                                {data?.response && data?.response.map((item: any, index: any) => {

                                    return (
                                        <div key={index}>
                                            <Box className={classes.boxIcon} >
                                                <img src={item.fields.HoverOff} alt="" />
                                                <p className={classes.iconTitle}>{item.fields.Title} </p>
                                            </Box>
                                        </div>
                                    )
                                })
                                }
                                {/* </Droppable>
                                </DragDropContext> */}
                            </Grid>
                            :
                            <Grid>
                                <div >
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="allSelect"
                                        // checked={
                                        //   users.filter((user) => user?.isChecked !== true).length < 1
                                        // }

                                        checked={!users.some((user: any) => user?.isChecked !== true)}
                                        onChange={handleChange}
                                    />
                                    <label >All Select</label>
                                </div>
                                <Grid item xs={12} className={classes.bigBox} >

                                    {
                                        users && users.map((item: any, index: any) => {

                                            return (
                                                <div key={index}>
                                                    <Box className={classes.boxIcon} >
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            name={item.fields.id}
                                                            checked={item?.isChecked || false}
                                                            onChange={handleChange}
                                                        />
                                                        <img src={item.fields.HoverOff} alt="" />
                                                        <p className={classes.iconTitle}>{item.fields.Title} </p>
                                                    </Box>
                                                </div>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        }

                    </Grid>
                </Paper>

            </Container>

        </div>
    );
};

export default QuicklinksPage;