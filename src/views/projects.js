import React, { useContext, useState, useEffect } from 'react'

import FilterLgScreenPanel from '../components/filter_lgScreen_panel'
import FilterSmallScreenPanel from '../components/filter_smallScreen_panel'
import ProjectList from '../components/proyect_list'

import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Box, Hidden
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    cardRoot: {
        width: '100%',
        marginTop: 10
    },
    media: {
        height: 300,
    },
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

function Projects({ projectList }) {
    const classes = useStyles();
    const [showStopFilterButton, setShowStopFilterButton] = useState(false)
    const [query, setQuery] = useState('')
    const [city, setCity] = useState('')
    //State for price range filter
    const [sincePriceRange, setSincePriceRange] = useState('')
    const [untilPriceRange, setUntilPriceRange] = useState('')
    const [isFilteringPriceRange, setIsFilteringPriceRange] = useState(false)
     //State for dues range filter
     const [sinceDuesRange, setSinceDuesRange] = useState('')
     const [untilDuesRange, setUntilDuesRange] = useState('')
     const [isFilteringDuesRange, setIsFilteringDuesRange] = useState(false)

    //Methods for city filter
    const handleChangeQuery = (e) => {
        setQuery(e.target.value)
        setShowStopFilterButton(true)
    }

    const filterByCity = (city) => {
        setCity(city)
        setShowStopFilterButton(true)
    }

    //Methods for price range filter
    const handleChangeSincePriceRange= (e) => {
        setSincePriceRange(e.target.value)
    }

    const handleChangeUntilPriceRange= (e) => {
        setUntilPriceRange(e.target.value)
    }

    const filterByPriceRange = () => {
        setIsFilteringPriceRange(true)
        setShowStopFilterButton(true)
    }

    //Methods for price range filter

    const handleChangeSinceDuesRange= (e) => {
        setSinceDuesRange(e.target.value)
    }

    const handleChangeUntilDuesRange= (e) => {
        setUntilDuesRange(e.target.value)
    }

    const filterByDuesRange = () => {
        setIsFilteringDuesRange(true)
        setShowStopFilterButton(true)
    }

    return (
        <>
            <Box px={2} pt={2} style={{ backgroundColor: '#F8F9FA' }}>
                <Box height={66} />
                <Grid container>
                    <Hidden smDown>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
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
                        </Grid>
                    </Hidden>

                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box display='flex' flexDirection='column'>
                            <FilterSmallScreenPanel
                                query={query}
                                projectList={projectList}
                                sincePriceRange={sincePriceRange}
                                untilPriceRange={untilPriceRange}

                                sinceDuesRange={sinceDuesRange}
                                untilDuesRange={untilDuesRange}

                                handleChangeQuery={(e) => handleChangeQuery(e)}
                                filterByCity={(city) => filterByCity(city)}
                                handleChangeSincePriceRange={(e) => handleChangeSincePriceRange(e)}
                                handleChangeUntilPriceRange={(e) => handleChangeUntilPriceRange(e)}
                                filterByPriceRange={filterByPriceRange}

                                handleChangeSinceDuesRange={(e) => handleChangeSinceDuesRange(e)}
                                handleChangeUntilDuesRange={(e) => handleChangeUntilDuesRange(e)}
                                filterByDuesRange={filterByDuesRange}

                            />
                            <ProjectList
                                projectList={projectList}
                                query={query}
                                city={city}
                                showStopFilterButton={showStopFilterButton}

                                sincePriceRange={sincePriceRange}
                                untilPriceRange={untilPriceRange}
                                isFilteringPriceRange={isFilteringPriceRange}

                                sinceDuesRange={sinceDuesRange}
                                untilDuesRange={untilDuesRange}
                                isFilteringDuesRange={isFilteringDuesRange}

                                setShowStopFilterButton={() => setShowStopFilterButton(!showStopFilterButton)}
                                setQuery={setQuery}
                                setCity={setCity}

                                setSincePriceRange={setSincePriceRange}
                                setUntilPriceRange={setUntilPriceRange}
                                setIsFilteringPriceRange={setIsFilteringPriceRange}

                                setSinceDuesRange={setSinceDuesRange}
                                setUntilDuesRange={setUntilDuesRange}
                                setIsFilteringDuesRange={setIsFilteringDuesRange}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Projects
