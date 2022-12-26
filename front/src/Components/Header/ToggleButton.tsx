import * as React from 'react';
//  import { useStyles } from './Styles';
import { makeStyles } from '@mui/styles';
import SecondWorkSpace from './../../Layout/SecondWorkSpace';
import WorkSpaceOne from './../WorkSpaceOne/index';
import { Link, NavLink } from 'react-router-dom';
import { NewsPageMore } from '../../Pages';
import { Switch, Space } from 'antd';


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

const ToggleButton = () => {
    const classes = useStyles();
  

    const [toggle, setToggle] = React.useState(true);
    const toggleChecked = () => setToggle(toggle => !toggle);

    const [show, setShow] = React.useState(false);



    return (
        <div>

            <div style={{marginTop:"15px", backgroundColor: "permission.enabled ? 'green' : 'orange'"}}>
                <Space direction="vertical">
                    <Switch checkedChildren="left side menu open" unCheckedChildren="right side menu open" defaultChecked />
                </Space>
              
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
           
        </div>
    );
}

export default ToggleButton;

