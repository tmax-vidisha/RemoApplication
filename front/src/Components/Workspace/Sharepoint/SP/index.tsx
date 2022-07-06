import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionType } from '../../../../Store copy/Actions/actionTypes';
import { foldersReducer, } from '../../../../Store copy/Reducer/foldersReducer';
import { AuthenticatedTemplate } from '@azure/msal-react';
import { Container } from '@mui/material';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';
import { useStyles } from './Styles';
import Loader from '../components/Loader';
import { getRootDriveReducer } from '../../../../Store copy/Reducer/drivesReducer';
import { getRootSitesReducer } from '../../../../Store copy/Reducer/sitesReducer';
import Sites from '../components/Sites';
import Drives from '../components/Drives';
import WorkspaceNavigation from '../../WorkspaceNavigation';

const initialStateSites = {
    loading: true,
    error: '',
    sites: [],
};
const initialStateDrives = {
    loading: true,
    error: '',
    drives: [],
};

const initialState = {
    loading: true,
    error: '',
    folders: [],
};

interface IDrivesProps {
    id: string;
}


const HomeScreen: React.FC = () => {
    const classes = useStyles();

    
    let navigate = useNavigate();
    const [rootDrivesState, DrivesDispatch] = useReducer(getRootDriveReducer, initialStateDrives);
    const { loadingDrives, errorDrives, drives } = rootDrivesState;
    const [rootSitesState, sitesDispatch] = useReducer(getRootSitesReducer, initialStateSites);
    const { loading: loadingSites, error: errorSites, sites } = rootSitesState;


    const [folderState, folderDispatch] = useReducer(
        foldersReducer,
        initialState
    );
    const { loading: loadingFolder, error: errorFolder, folders } = folderState;

  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen