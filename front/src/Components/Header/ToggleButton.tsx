import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
 import Switch, { SwitchProps } from '@mui/material/Switch';
//  import { useStyles } from './Styles';
import { makeStyles } from '@mui/styles';
import SecondWorkSpace from './../../Layout/SecondWorkSpace';
import WorkSpaceOne from './../WorkSpaceOne/index';
import { Link, NavLink } from 'react-router-dom';
import { NewsPageMore } from '../../Pages';


const useStyles = makeStyles({
    root: {
        width: "150px",
        height: "24px",
        padding: "0px"
    },
    switchBase: {
        color: "#818181",
        padding: "1px",
        "&$checked": {
            "& + $track": {
                backgroundColor: "#23bf58"
            }
        }
    },
    thumb: {
        color: "white",
        width: "20px",
        height: "20px",
        margin: "1px"
    },
    track: {
        borderRadius: "20px",
        backgroundColor: "#818181",
        opacity: "1 !important",
        "&:after, &:before": {
            color: "white",
            fontSize: "11px",
            position: "absolute",
            top: "6px"
        },
        "&:after": {
            content: "'On'",
            left: "18px"
        },
        "&:before": {
            content: "'Off'",
            right: "17px"
        }
    },
    checked: {
        color: "#23bf58 !important",
        transform: "translateX(26px) !important"
    }
});


const ToggleButton = () => {
     const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true
    });

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [toggle, setToggle] = React.useState(true);
    const toggleChecked = () => setToggle(toggle => !toggle);

    const [show, setShow] = React.useState(false);


    return (
        <div>

            <div>
                {/* <Switch /> */}
                {/*<Switch onClick={toggleChecked} />
                 <Switch onClick={() => setShow(!show)} /> */}
                {/* <label className="switch switch-left-right">
                    <input className="switch-input" type="checkbox" />
                    <span className="switch-label" data-on="On" data-off="Off"></span>
                    <span className="switch-handle"></span>
                </label> */}
                <Switch
                    classes={{
                        root: classes.root,
                        switchBase: classes.switchBase,
                        thumb: classes.thumb,
                        track: classes.track,
                        checked: classes.checked
                    }}
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <div>
                    {/* <Switch
                        slotProps={{
                            track: {
                                children: (
                                    <React.Fragment>
                                        <Typography component="span" level="inherit" sx={{ ml: '10px' }}>
                                            On
                                        </Typography>
                                        <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                                            Off
                                        </Typography>
                                    </React.Fragment>
                                ),
                            },
                        }}
                        sx={{
                            '--Switch-thumb-size': '27px',
                            '--Switch-track-width': '64px',
                            '--Switch-track-height': '31px',
                        }}
                    /> */}
                </div>
            </div>
            {toggle &&
                <div>
                    <Link to="/WorkSpaceOne" ></Link>
                </div>

            }
            {!toggle &&
                <div>

                    <NewsPageMore />
                </div>

            }
            {/* <label className={classes.switch}>
                <input type="checkbox" id="togBtn" />
                    <div className={classes.sliderRound}>
                        <span className={classes.EMEA}>EMEA</span>
                        <span className={classes.AMERICAS}>AMERICAS</span>
                    </div>
            </label> */}

            {/* <div>
                <p>Show state: {show}</p>
                {show ? (
                   <Link to="/WorkSpaceOne" ></Link>
                ) : null}
                <button onClick={() => setShow(!show)}>toggle</button>
            </div> */}
        </div>
    );
}

export default ToggleButton;

{/* <div className={classes.container}>

<div className={classes.toggleSwitch}>
    <input type="checkbox" className={classes.checkbox}
        name={label} id={label} />
    <label className={classes.label} htmlFor={label}>
        <span className={classes.inner} />
        <span className={classes.switch} />
    </label>
</div>
</div> */}
