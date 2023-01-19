import React from 'react';
import WorkSpaceOne from '../Components/WorkSpaceOne';
import SecondWorkSpace from './SecondWorkSpace';
import { Switch, Space } from 'antd';
import { useState } from 'react';

const WorkspaceToggle = (permission: any) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked: any) => {
        setChecked(nextChecked);
    };
    return (
        <div>
                <div>
                    <Switch
                        checkedChildren={"slide to top menu"}
                        unCheckedChildren={"slide to left menu "}
                        defaultChecked={true}
                        style={{
                            border: permission.enabled ? '1px solid white' : '1px solid white',
                            backgroundColor: permission.enabled ? '#02354D' : '#02354D',
                            color: permission.enabled ? 'white' : 'yellow',
                            width: "150px",
                            position: "absolute", top: "4%", marginLeft: "-40px"
                        }}
                        onChange={handleChange}
                        checked={checked} />
                </div>
                {checked ? <SecondWorkSpace /> :

                   <WorkSpaceOne/>
                    }

           
        </div>
    );
};

export default WorkspaceToggle;