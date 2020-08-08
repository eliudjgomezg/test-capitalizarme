import React, { useState } from 'react';

import LargeScreenMenu from './large_screen_menu'
import SmallScreenMenu from './small_screen_menu'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Box, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#F8F9FA'
    },
    title: {
        flexGrow: 1,
    }
}));

export default function Nav() {
    const classes = useStyles();
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color='inherit' className={classes.appBar}>
                <Toolbar>
                    <Hidden smDown>
                        <Box width={120} />
                    </Hidden>

                    <Typography variant="h6" className={classes.title}>
                        Capitalizarme.com
                    </Typography>

                    <Hidden smDown>
                        <LargeScreenMenu />
                    </Hidden>

                    <Hidden smDown>
                        <Box width={120} />
                    </Hidden>

                    <Hidden mdUp >
                        <Button variant="outlined" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                            <MenuIcon stile={{ color: '#828283' }} />
                        </Button>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp >
                    <SmallScreenMenu isOpenMenu={isOpenMenu} />
                </Hidden>
            </AppBar>
        </div>
    );
}



