import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Box, Popover, List, ListItem, ListItemIcon, ListItemText, Hidden } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import chile from '../../../assets/chile.png'
import peru from '../../../assets/peru.png'
import usa from '../../../assets/usa.png'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    link: {
        margin: '0 10px',
        color: '#828283',
        textDecoration: 'none'
    }
}));

export default function LargeScreenMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Hidden smDown>
            <Link to={'/projects'} color="inherit" className={classes.link} >Proyectos</Link>
            <Link to={'/projects'} color="inherit" className={classes.link} >Como funciona</Link>
            <Link to={'/projects'} color="inherit" className={classes.link} >Muntimedia</Link>
            <Link to={'/projects'} color="inherit" className={classes.link} >Contáctanos</Link>
            <Link to={'/projects'} color="inherit" className={classes.link} >Aprende</Link>

            <Divider orientation="vertical" flexItem style={{ height: 40, marginTop: 10 }} />
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<ArrowRightAltIcon />}
                style={{ backgroundColor: '#D75D73', color: 'white' }}
            >
                Agenda hoy
                        </Button>

            <div onClick={handleClick}>
                <img src={chile} />
                <ArrowDropDownIcon fontSize='small' style={{ color: '#828283', marginBottom: 5 }} />
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
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
            </Popover>
        </Hidden>
    );
}



