import { styled } from '@mui/material';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import IconText from '../Header/IconText';
import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs, Icon, Button,Paper } from '@mui/material';
import { useStyles } from './Styles';
import { useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface type {
    div: any[];
}
const StyledNode = styled('div')`
padding: 5px;
border-radius: 8px;
display: inline-block;
border: 1px solid red;
`;

const OrgChartPage = () => {
    const classes = useStyles();
    let location = useLocation();

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
                                    <Link className={classes.breadLinks} color="inherit" href="/">
                                        <Typography>  OrgChart  </Typography>
                                    </Link>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>
                        <Tree
                            lineWidth={'2px'}
                            lineColor={'green'}
                            lineBorderRadius={'10px'}
                            label={<StyledNode>Root</StyledNode>}
                        >
                            <TreeNode label={<StyledNode>Child 1</StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
                            </TreeNode>
                            <TreeNode label={<StyledNode>Child 2</StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
                                    <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
                                    <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
                                </TreeNode>
                            </TreeNode>
                            <TreeNode label={<StyledNode>Child 3</StyledNode>}>
                                <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
                                <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
                            </TreeNode>
                        </Tree>
                    </Grid>
                </Paper>

            </Container>

        </div>
    );
};

export default OrgChartPage;