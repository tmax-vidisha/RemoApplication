import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useStyles } from './Styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import SecondWorkSpace from './../../Layout/SecondWorkSpace';
import WorkSpaceOne from './../WorkSpaceOne/index';
import { Link, NavLink } from 'react-router-dom';
import { NewsPageMore } from '../../Pages';




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
            {/* <Switch
                classes={{
                    root: classes.MuiSwitch,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked
                }}
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
            /> */}

            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <Switch />
               {/*<Switch onClick={toggleChecked} />
                 <Switch onClick={() => setShow(!show)} /> */}
            </div>
            {toggle &&
                <div>
                    <Link to="/WorkSpaceOne" ></Link>
                </div>

            }
            {!toggle &&
                <div>

                    <NewsPageMore/>
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
