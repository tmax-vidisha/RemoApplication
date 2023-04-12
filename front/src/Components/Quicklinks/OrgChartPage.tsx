import { styled } from '@mui/material';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import IconText from '../Header/IconText';
import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs, Icon, Button, Paper } from '@mui/material';
import { useStyles } from './Styles';
import { useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import boss from "../../Assets/Images/boss.png";
import plus from "../../Assets/Images/plusOrg.svg";
import minus from "../../Assets/Images/minusOrg.svg";
import { useState } from 'react';

interface type {
    div: any[];
}
const StyledNode = styled('div')`
padding: 5px;
border-radius: 8px;
display: inline-block;
// border: 1px solid white;
`;

const OrgChartPage = () => {
    const classes = useStyles();
    let location = useLocation();
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [showResults, setShowResults] = React.useState(false)
    const onClickShowResults = () => {
        setShowResults(true);
        setIsActive(!isActive);
    };
    const handleHide = () => {
        setShowResults(false);
        setIsActive(isActive)
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
                                    OrgChart
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
                                        <Typography>  OrgChart  </Typography>
                                    </Link>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid item xs={12} style={{ backgroundColor: "white", padding: "30px" }}>
                        <Tree
                            lineWidth={'2px'}
                            lineColor={'green'}
                            lineBorderRadius={'10px'}
                            label={<StyledNode>
                                <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        {isActive ?
                                            <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                            :
                                            <img src={minus} alt="plus" className={classes.plusMinus} onClick={handleHide} />

                                        }
                                    </div>
                                </div>
                            </StyledNode>}>
                            {/* {
                               showResults ?
                                    <> */}
                            <TreeNode label={<StyledNode>
                                <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                    </div>
                                </div>
                            </StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
                            </TreeNode>
                            <TreeNode label={<StyledNode>
                                 <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                    </div>
                                </div>
                            </StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
                                    <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
                                    <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
                                </TreeNode>
                            </TreeNode>
                            <TreeNode label={<StyledNode>
                                <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                    </div>
                                </div>
                            </StyledNode>}>
                                <TreeNode label={<StyledNode>
                                    <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                    </div>
                                </div>
                                </StyledNode>} />
                                {/* <TreeNode label={<StyledNode></StyledNode>} /> */}
                            </TreeNode>
                            <TreeNode label={<StyledNode>
                                <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                    </div>
                                </div>
                            </StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
                                <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
                            </TreeNode>
                            <TreeNode label={<StyledNode>
                                <div className={classes.OrgBox}>
                                    <img src={boss} alt="boss" className={classes.orgImg} />
                                    <div>
                                        <p className={classes.pTextOrg}>TariqAl Ghussein Al</p>
                                        <p className={classes.TextOrg}>Chief Executive Officer</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt="plus" className={classes.plusMinus} onClick={onClickShowResults} />
                                    </div>
                                </div>
                            </StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
                                <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
                            </TreeNode>

                            {/* </> : null
                            } */}

                        </Tree>
                    </Grid>
                </Paper>

            </Container>

        </div>
    );
};

export default OrgChartPage;