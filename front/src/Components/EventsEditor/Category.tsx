import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from './Styles';

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width:250,
        },
    },
};

const names = [
    'Meetings',
    'Work Hours',
    'Business',
    'Holiday',
    'Get-together',
    'Gifts',
    'Birthday',
    'Anniversary',
    
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectPlaceholder() {
    const classes=useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 0, width:' 100%', mt: 0 }}>
                <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    className={classes.span}
                    style={{ width: "100%",textAlign:"left", color:"#606C74",height: "35px"}}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <p>Enter value here</p>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Enter value here</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}