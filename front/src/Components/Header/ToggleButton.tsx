import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useStyles } from './Styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

  
const ToggleButton = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true
    });

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <>
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
        </>
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