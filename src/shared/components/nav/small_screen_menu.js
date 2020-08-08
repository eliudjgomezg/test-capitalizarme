import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Box, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import chile from '../../../assets/chile.png'
import peru from '../../../assets/peru.png'
import usa from '../../../assets/usa.png'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    linkResponsive: {
        margin: '5px 20px',
        color: '#828283',
        textDecoration: 'none'
    }
}));
const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1
};

export default function SmallScreenMenu({isOpenMenu}) {
    const classes = useStyles();

    return (
        <>
            <Collapse in={isOpenMenu}>
                <Box display='flex' flexDirection='column'>
                    <Link to={'/projects'} color="inherit" className={classes.linkResponsive} >Proyectos</Link>
                    <Link to={'/projects'} color="inherit" className={classes.linkResponsive} >Como funciona</Link>
                    <Link to={'/projects'} color="inherit" className={classes.linkResponsive} >Muntimedia</Link>
                    <Link to={'/projects'} color="inherit" className={classes.linkResponsive} >Contáctanos</Link>
                    <Link to={'/projects'} color="inherit" className={classes.linkResponsive} >Aprende</Link>
                </Box>

                <Box borderRadius="borderRadius" mx={2} bgcolor="background.paper" borderColor="grey.500" {...defaultProps} >
                    <p className='ml redColor'>Aprende de Inversiones</p>
                    <p className='ml errorColor'>Comunidad Capitalizarme.com</p>
                </Box>

                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<ArrowRightAltIcon />}
                    style={{ backgroundColor: '#D75D73', color: 'white', width: 200, marginLeft: 20 }}
                >
                    Agenda hoy
                </Button>

                <Box mx={2}>
                    <div className='ml15'>
                        <img src={chile} />
                        <ArrowDropDownIcon fontSize='small' style={{ color: '#828283', marginBottom: 5 }} />
                    </div>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <img src={chile} />
                            </ListItemIcon>
                            <ListItemText primary="Chile" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <img src={peru} />
                            </ListItemIcon>
                            <ListItemText primary="Peru" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <img src={usa} />
                            </ListItemIcon>
                            <ListItemText primary="Estados Unidos" />
                        </ListItem>
                    </List>
                </Box>
            </Collapse>
        </>
    );
}



