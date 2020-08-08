import React, { useContext } from 'react'
import { Context } from "../store/appContext";

import { List, ListItem, ListItemText, Box, TextField, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function FilterLgScreenPanel(props) {
    const {
        filterByCity, projectList, sincePriceRange,  untilPriceRange, sinceDuesRange, untilDuesRange,
        filterByPriceRange, handleChangeSincePriceRange, handleChangeUntilPriceRange, handleChangeSinceDuesRange, handleChangeUntilDuesRange, filterByDuesRange
    } = props
    const cities = () => {
        const citiesList = projectList.map(project => project.city)
        return [...new Set(citiesList)]
    }
    return (

        <Box display='flex' flexDirection='column'>
            <h2 className='noSpacing'>Proyectos Disopnibles</h2>
            <p>{projectList.length} proyectos encontrados</p>

            <h2 className='noSpacing'>Filtrar por:</h2>
            <h3 className='noSpacing mt15'>Ciudades</h3>
            <List component="nav" aria-label="main mailbox folders">
                {cities().map(city => {
                    return (
                        <ListItem button onClick={() => filterByCity(city)}>
                            <ListItemText primary={city} />
                        </ListItem>
                    )
                })}
            </List>
            <h3 className='noSpacing mt15'>Precio</h3>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem>
                    <TextField
                        label="Desde"
                        id="outlined-size-small"
                        placeholder='UF1200'
                        variant="outlined"
                        size="small"
                        name='since'
                        value={sincePriceRange}
                        onChange={handleChangeSincePriceRange}
                    />
                    <TextField
                        label="Hasta"
                        id="outlined-size-small"
                        placeholder='UF3500'
                        variant="outlined"
                        size="small"
                        name='until'
                        value={untilPriceRange}
                        onChange={handleChangeUntilPriceRange}
                    />
                    <IconButton onClick={filterByPriceRange}>
                        <NavigateNextIcon />
                    </IconButton>
                </ListItem>
            </List>

            <h3 className='noSpacing mt15'>Cuota</h3>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem>
                    <TextField
                        label="Desde"
                        id="outlined-size-small"
                        placeholder='CLP185.000'
                        variant="outlined"
                        size="small"
                        value={sinceDuesRange}
                        onChange={handleChangeSinceDuesRange}
                    />
                    <TextField
                        label="Hasta"
                        id="outlined-size-small"
                        placeholder='CLP380.000'
                        variant="outlined"
                        size="small"
                        value={untilDuesRange}
                        onChange={handleChangeUntilDuesRange}
                    />
                    <IconButton onClick={filterByDuesRange}>
                        <NavigateNextIcon />
                    </IconButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default FilterLgScreenPanel
