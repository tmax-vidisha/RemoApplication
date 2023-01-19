import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SecondWorkSpace from './../../Layout/SecondWorkSpace';
import WorkSpaceOne from './../WorkSpaceOne/index';
import { Link, NavLink } from 'react-router-dom';
import { NewsPageMore } from '../../Pages';
import { Switch, Space } from 'antd';
import Welcome from './../../Welcome';

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

interface type {

}

const ToggleButton = (permission:any) => {
    const classes = useStyles();

    // const [toggle, setToggle] = React.useState(true);
    // const toggleChecked = () => setToggle(toggle => !toggle);
    // const [showResults, setShowResults] = React.useState(false)

    // const handleClick = () => {
    //     setShowResults(true)
    //   };
      const [checked, setChecked] =useState(false);
      const handleChange = (nextChecked:any) => {
        setChecked(nextChecked);
      };
    return (
        <div>

            <div>
                    <Switch 
                    checkedChildren={"slide to top menu"}
                     unCheckedChildren={"slide to left menu " }
                     defaultChecked={true}
                     style={{border: permission.enabled ? '1px solid white' : '1px solid white',
                      backgroundColor:permission.enabled?'#02354D':'#02354D',
                    color:permission.enabled ? 'white':'yellow',
                     width:"150px", 
                     position: "absolute", top:"4%", marginLeft:"-40px" }}
                    onChange={handleChange}
                    checked={checked}
                    //   onChange={(checked) =>{
                    //     console.log("switch is checked", checked)
                    //   }}
                    //   onChange={(showResults) =>{
                    //     console.log("switch is checked", showResults)
                    //     setShowResults(true);
                    //   }}
                    //   onClick={handleClick} 
                    />           
            </div>
            {checked ? <SecondWorkSpace/> : <WorkSpaceOne/> }

        </div>
    );
}

export default ToggleButton;

