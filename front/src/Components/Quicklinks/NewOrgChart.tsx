import { styled } from "@mui/material";
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import IconText from "../Header/IconText";
import {
  Container,
  Grid,
  Typography,
  Card,
  Link,
  Breadcrumbs,
  Paper,
} from "@mui/material";
import { useStyles } from "./Styles";
import { useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import boss from "../../Assets/Images/boss.png";
import plus from "../../Assets/Images/plusOrg.svg";
import minus from "../../Assets/Images/minusOrg.svg";
import { useState } from "react";

interface Employee {
  id: number;
  Name: string;
  position: string;
  profile: string;
  children?: Employee[];
}

const StyledNode = styled("div")`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  // border: 1px solid white;
`;

const NewOrgChart = () => {
  const classes = useStyles();
  const sampleData: Employee[] = [
    {
      id: 1,
      Name: "CEO",
      position: "Chief Executive Officer",
      profile: "profile1.jpg",
      children: [
        {
          id: 2,
          Name: "Manager 1",
          position: "Manager",
          profile: "profile2.jpg",
          children: [
            {
              id: 3,
              Name: "Employee 1.1",
              position: "Employee",
              profile: "profile3.jpg",
            },
            // Add more employees here
          ],
        },
        {
          id: 4,
          Name: "Manager 2",
          position: "Manager",
          profile: "profile4.jpg",
          children: [
            {
              id: 5,
              Name: "Employee 2.1",
              position: "Employee",
              profile: "profile5.jpg",
            },
            // Add more employees here
          ],
        },
        // Add more managers here
      ],
    },
  ];

  const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

  const handleNodeClick = (nodeId: number) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };
  const renderEmployee = (employee: Employee) => (
    <div key={employee.id}>
      <div onClick={() => handleNodeClick(employee.id)}>
        <p>Name: {employee.Name}</p>
        <p>Position: {employee.position}</p>
      </div>
      {expandedNodes.includes(employee.id) && employee.children && (
        <div>{employee.children.map((child) => renderEmployee(child))}</div>
      )}
    </div>
  );

  const [isActive, setIsActive] = useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const [show2, setShow2] = React.useState(false);
  const onClickShowResults = () => {
    setIsActive(!isActive);
    setShowResults(true);
  };
  const onClickShow = () => {
    setShow2(!show2);
  };
  const handleHide = () => {
    setIsActive(isActive);
    setShowResults(false);
  };
  const HideIcon = () => {
    setShow2(show2);
  };

  return (
    <div>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={undefined}
      >
        {sampleData.map((item) => (
          <TreeNode
            key={item.id}
            label={
              <StyledNode>
                <div
                  className={classes.OrgBox}
                  onClick={() => handleNodeClick(item.id)}
                >
                  <img
                    src={item.profile}
                    alt="boss"
                    className={classes.orgImg}
                  />
                  <div>
                    <p className={classes.pTextOrg}>{item.Name}</p>
                    <p className={classes.TextOrg}>{item.position}</p>
                  </div>
                  <div>
                    {expandedNodes.includes(item.id) ? (
                      <img
                        src={plus}
                        alt="plus"
                        className={classes.plusMinus}
                        onClick={onClickShowResults}
                      />
                    ) : (
                      <img
                        src={minus}
                        alt="minus"
                        className={classes.plusMinus}
                        onClick={handleHide}
                      />
                    )}
                  </div>
                </div>
              </StyledNode>
            }
          >
            {expandedNodes.includes(item.id) && item.children && (
              <>
                {item.children.map((child) => (
                  <TreeNode
                    key={child.id}
                    label={
                      <StyledNode>
                        <div className={classes.OrgBox}>
                          <img
                            src={child.profile}
                            alt="boss"
                            className={classes.orgImg}
                          />
                          <div>
                            <p className={classes.pTextOrg}>{child.Name}</p>
                            <p className={classes.TextOrg}>{child.position}</p>
                          </div>
                          <div>
                            <img
                              src={plus}
                              alt="plus"
                              className={classes.plusMinus}
                              onClick={onClickShowResults}
                            />
                          </div>
                        </div>
                      </StyledNode>
                    }
                  >
                    {/* Render grandchildren nodes here if needed */}
                  </TreeNode>
                ))}
              </>
            )}
          </TreeNode>
        ))}
      </Tree>
    </div>
  );
};

export default NewOrgChart;
