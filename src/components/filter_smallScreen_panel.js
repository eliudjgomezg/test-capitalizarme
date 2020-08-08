import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext";

import FilterLgScreenPanel from '../components/filter_lgScreen_panel'

import { makeStyles } from '@material-ui/core/styles';
import {
    Divider, InputBase, Box, Hidden, Paper, IconButton, Link, Collapse
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
   
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        margin: theme.spacing(1),
    },
    mt: {
        marginTop: 10
    }
}));
const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1
};

function FilterSmallScreenPanel(props) {
    const 
    {projectList, query, sincePriceRange, untilPriceRange, handleChangeSincePriceRange, sinceDuesRange, untilDuesRange,
        handleChangeUntilPriceRange, filterByPriceRange, handleChangeQuery, filterByCity, handleChangeSinceDuesRange, handleChangeUntilDuesRange, filterByDuesRange
    } = props
    const classes = useStyles();
    const { actions, store } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false)

    return (    
        <>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Buscar por nombre de proyecto"
                    inputProps={{ 'aria-label': 'Buscar por nombre de proyecto' }}
                    value={query}
                    onChange={handleChangeQuery}
                />

                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                    <SearchIcon />
                </IconButton>
                <Hidden mdUp>
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={() => setIsOpen(!isOpen)}>
                        <FilterListIcon />
                    </IconButton>
                </Hidden>
            </Paper>
            <Hidden mdUp>
                <Collapse in={isOpen}>
                    <Box px={2} mt={2} borderRadius="borderRadius" bgcolor="background.paper" borderColor="grey.500" {...defaultProps}>
                        <FilterLgScreenPanel 
                            projectList={projectList}
                            sincePriceRange={sincePriceRange}
                            untilPriceRange={untilPriceRange}

                            sinceDuesRange={sinceDuesRange}
                            untilDuesRange={untilDuesRange}

                            filterByCity={(city) => filterByCity(city)}
                            handleChangeSincePriceRange={(e) => handleChangeSincePriceRange(e)}
                            handleChangeUntilPriceRange={(e) => handleChangeUntilPriceRange(e)}
                            filterByPriceRange={filterByPriceRange}

                            handleChangeSinceDuesRange={(e) => handleChangeSinceDuesRange(e)}
                            handleChangeUntilDuesRange={(e) => handleChangeUntilDuesRange(e)}
                            filterByDuesRange={filterByDuesRange}
                        />
                    </Box>
                </Collapse>
            </Hidden>
        </>
    )
}

export default FilterSmallScreenPanel
