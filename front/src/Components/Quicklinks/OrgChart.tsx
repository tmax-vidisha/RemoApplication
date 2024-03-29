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

interface type {
  div: any[];
}

interface StyledNodeProps {
  isActive: boolean;
  hasChildren: boolean;
}

const StyledNode = styled("div")`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  // border: 1px solid white;
`;
// const StyledNode = styled("div")(
//   ({ isActive, hasChildren }: StyledNodeProps) => ({
//     padding: "5px",
//     borderRadius: "8px",
//     display: "inline-block",
//     backgroundColor: isActive ? "lightgray" : "inherit",
//     cursor: hasChildren ? "pointer" : "default",
//   })
// );
interface IFolderProps {
  data: any;
  error: any;
  isLoading: any;
}

const OrgChart: React.FC<IFolderProps> = (props: IFolderProps) => {
  //const OrgChart= ()=> {
  const { data, error, isLoading } = props;
  console.log(data, "org chart front");
  const classes = useStyles();
  let location = useLocation();
  const [show, setShow] = useState(false);
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

  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const handleNodeClick = (nodeId: string) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const [childNodes, setChildNodes] = useState<string[]>([]);
  const handleChildNode = (nodeId: string) => {
    if (childNodes.includes(nodeId)) {
      setChildNodes(childNodes.filter((id) => id !== nodeId));
    } else {
      setChildNodes([...childNodes, nodeId]);
    }
  };
  const ceo = () => {
    let level_1 = data?.response?.filter(
      (item: any) => item.Level === "Org_level_1"
    );
  };
  const manager = () => {
    let empData = data?.response?.map((item: any) => item?.fields);
    let level_1 = empData?.filter((item: any) => item.Levels === "Org-level-1");
    let level_2: [] = level_1?.map((item: any) => {
      console.log(
        "level2",
        empData.filter(
          (item2: any) => item2.Manager_code === item.Employee_code
        )
      );
      return {
        ...item,
        children: empData.filter(
          (item2: any) => item2.Manager_code === item.Employee_code
        ),
      };
    });
    console.log(level_1, level_2, "level");
    return level_2;
  };

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
                  OrgChart
                </Link>
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link className={classes.breadLinks} color="inherit" href="/">
                    Home
                  </Link>
                  <Link
                    className={classes.breadLinks}
                    color="inherit"
                    href="/orgChartPage"
                  >
                    <Typography> OrgChart </Typography>
                  </Link>
                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>
        <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
          <Grid
            item
            xs={12}
            style={{ backgroundColor: "white", padding: "30px" }}
          >
            {/* <Tree
              lineWidth={"2px"}
              lineColor={"green"}
              lineBorderRadius={"10px"}
              // className={classes.mainDiv}
              label={
                <StyledNode>
                  <div
                    className={classes.OrgBox}
                    onClick={() => handleNodeClick("nodeId1")}
                  >
                    <img src={boss} alt="boss" className={classes.orgImg} />
                    <div>
                      <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                      <p className={classes.TextOrg}>Chief Executive Officer</p>
                    </div>
                    <div>
                      {isActive ? (
                        <img
                          src={plus}
                          alt="plus"
                          className={classes.plusMinus}
                          onClick={onClickShowResults}
                        />
                      ) : (
                        <img
                          src={minus}
                          alt="plus"
                          className={classes.plusMinus}
                          onClick={handleHide}
                        />
                      )}
                    </div>
                  </div>
                </StyledNode>
              }
            >
              {expandedNodes.includes("nodeId1") && (
                <>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div className={classes.OrgBox}>
                          <img
                            src={boss}
                            alt="boss"
                            className={classes.orgImg}
                          />
                          <div>
                            <p className={classes.pTextOrg}>
                              TariqAl Ghussein Al
                            </p>
                            <p className={classes.TextOrg}>
                              Chief Executive Officer
                            </p>
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
                    <TreeNode
                      label={
                        <StyledNode>
                          <div
                            className={classes.OrgBox}
                            onClick={() => handleChildNode("nodeId2")}
                          >
                            <img
                              src={boss}
                              alt="boss"
                              className={classes.orgImg}
                            />
                            <div>
                              <p className={classes.pTextOrg}>
                                TariqAl Ghussein Al
                              </p>
                              <p className={classes.TextOrg}>Manager</p>
                            </div>
                            <div>
                              {show2 ? (
                                <img
                                  src={plus}
                                  alt="plus"
                                  className={classes.plusMinus}
                                  onClick={onClickShow}
                                />
                              ) : (
                                <img
                                  src={minus}
                                  alt="plus"
                                  className={classes.plusMinus}
                                  onClick={HideIcon}
                                />
                              )}
                            </div>
                          </div>
                        </StyledNode>
                      }
                    >
                      {childNodes.includes("nodeId2") && (
                        <>
                          <TreeNode
                            label={<StyledNode>Employee one</StyledNode>}
                          />
                          <TreeNode
                            label={<StyledNode>Employee 2</StyledNode>}
                          />
                        </>
                      )}
                    </TreeNode>
                  </TreeNode>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div className={classes.OrgBox}>
                          <img
                            src={boss}
                            alt="boss"
                            className={classes.orgImg}
                          />
                          <div>
                            <p className={classes.pTextOrg}>
                              TariqAl Ghussein Al
                            </p>
                            <p className={classes.TextOrg}>Employee</p>
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
                    <TreeNode
                      label={
                        <StyledNode>
                          <div className={classes.OrgBox}>
                            <img
                              src={boss}
                              alt="boss"
                              className={classes.orgImg}
                            />
                            <div>
                              <p className={classes.pTextOrg}>
                                TariqAl Ghussein Al
                              </p>
                              <p className={classes.TextOrg}>
                                Chief Executive Officer
                              </p>
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
                    />
                  </TreeNode>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div className={classes.OrgBox}>
                          <img
                            src={boss}
                            alt="boss"
                            className={classes.orgImg}
                          />
                          <div>
                            <p className={classes.pTextOrg}>
                              TariqAl Ghussein Al
                            </p>
                            <p className={classes.TextOrg}>
                              Chief Executive Officer
                            </p>
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
                    <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
                    <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
                  </TreeNode>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div className={classes.OrgBox}>
                          <img
                            src={boss}
                            alt="boss"
                            className={classes.orgImg}
                          />
                          <div>
                            <p className={classes.pTextOrg}>
                              TariqAl Ghussein Al
                            </p>
                            <p className={classes.TextOrg}>
                              Chief Executive Officer
                            </p>
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
                    <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
                    <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
                  </TreeNode>
                </>
              )}
            </Tree> */}
          </Grid>
        </Paper>
        <div>
          {data?.response &&
            manager()?.map((item: any, index: any) => {
              const { fields = {} } = item;
              let Name = fields?.Legal_name;
              let position = fields?.Position_long_description;
              let email = fields?.Communication_Email;
              let profile = fields?.UserProfileUrl;

              return (
                <Tree
                  lineWidth={"2px"}
                  lineColor={"green"}
                  lineBorderRadius={"10px"}
                  label={
                    <StyledNode>
                      <div
                        className={classes.OrgBox}
                        onClick={() => handleNodeClick("nodeId1")}
                      >
                        <img
                          src={profile}
                          alt="boss"
                          className={classes.orgImg}
                        />
                        <div>
                          <p className={classes.pTextOrg}>{Name}</p>
                          <p className={classes.TextOrg}>{position}</p>
                          <p className={classes.TextOrg}>{email}</p>
                        </div>
                        <div>
                          {isActive ? (
                            <img
                              src={plus}
                              alt="plus"
                              className={classes.plusMinus}
                              onClick={onClickShowResults}
                            />
                          ) : (
                            <img
                              src={minus}
                              alt="plus"
                              className={classes.plusMinus}
                              onClick={handleHide}
                            />
                          )}
                        </div>
                      </div>
                    </StyledNode>
                  }
                >
                  {expandedNodes.includes("nodeId2") && (
                    <>
                      <TreeNode
                        key="nodeId2"
                        label={
                          <StyledNode>
                            <div className={classes.OrgBox}>
                              <img
                                src={profile}
                                alt="boss"
                                className={classes.orgImg}
                              />
                              <div>
                                <p className={classes.pTextOrg}>{Name}</p>
                                <p className={classes.TextOrg}>{position}</p>
                                <p className={classes.TextOrg}>{email}</p>
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
                        <TreeNode
                          label={
                            <StyledNode
                              onClick={() => handleChildNode("nodeId3")}
                            >
                              Grand Child
                            </StyledNode>
                          }
                        />
                      </TreeNode>
                    </>
                  )}
                </Tree>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default OrgChart;
