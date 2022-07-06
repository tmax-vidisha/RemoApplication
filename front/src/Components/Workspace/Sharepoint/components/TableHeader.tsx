/* eslint-disable */
import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Typography } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import { useStyles } from '../SP/Styles';


const TableHeader = () => {
    const classes = useStyles();

    return (
        <TableHead>
            <TableRow className={classes.tableHeader}>
                <TableCell>
                    <Typography variant="caption" component="span">
                        Name
                    </Typography>
                </TableCell>
                <TableCell sx={{ width: '60px' }}></TableCell>
                <TableCell>
                    <Typography variant="caption" component="span">
                        Modified
                    </Typography>
                </TableCell>

                <TableCell>
                    <Typography variant="caption" component="span">
                        Modified By
                    </Typography>
                </TableCell>
            </TableRow>
        </TableHead>

    )
}

export default TableHeader