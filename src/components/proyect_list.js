import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { useHistory } from 'react-router-dom';

import project1 from '../assets/project1.jpg'

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, CardActions, Button, CardActionArea, Card, CardMedia, CardContent
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        width: '100%',
        marginTop: 10
    },
    media: {
        height: 300,
    },
    button: {
        margin: theme.spacing(1),
    },
    mt: {
        marginTop: 10
    }
}));
function ProjectList(props) {
    const
        {
            projectList, query, city, sincePriceRange, untilPriceRange, isFilteringPriceRange, showStopFilterButton, sinceDuesRange, untilDuesRange, isFilteringDuesRange,
            setShowStopFilterButton, setQuery, setCity, setUntilPriceRange,setSincePriceRange, setIsFilteringPriceRange,  setSinceDuesRange, setUntilDuesRange, setIsFilteringDuesRange
        } = props
    const classes = useStyles();
    const history = useHistory()
    const { actions, store } = useContext(Context);

    const showProject = (id) => {
        history.push(`/proyectDetail/${id}`)
    }

    const cancelFilter = () => {
        setQuery('')
        setCity('')
        setSincePriceRange('')
        setUntilPriceRange('')
        setIsFilteringPriceRange(false)
        setSinceDuesRange('')
        setUntilDuesRange('')
        setIsFilteringDuesRange(false)
        setShowStopFilterButton()
    }

    return (
        <>
            {showStopFilterButton &&
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    fullWidth
                    style={{ backgroundColor: '#D75D73', color: 'white', width: '100%' }}
                    onClick={cancelFilter}
                >
                    Cancelar filtros
                </Button>
            }
            {projectList.length > 0 ?
                <>
                    {projectList
                        .filter(proyect => {
                            if (sincePriceRange !== '' &&  untilPriceRange !== '' && isFilteringPriceRange) {
                                return proyect.price >= sincePriceRange && proyect.price <= untilPriceRange ? true : false
                            } else {
                                return true
                            }
                        })
                        .filter(proyect => {
                            if (sinceDuesRange !== '' && untilDuesRange !== '' && isFilteringDuesRange) {
                                return proyect.dues >= sinceDuesRange && proyect.dues <= untilDuesRange ? true : false
                            } else {
                                return true
                            }
                        })
                        .filter(proyect => {
                            if (city !== '') {
                                return proyect.city === city ? true : false
                            } else {
                                return true
                            }
                        })
                        .filter(proyect => proyect.projectName.toLowerCase().replace(/ /g, '').indexOf(query.toLowerCase().replace(/ /g, '')) >= 0)
                        .map(project => {
                            return (
                                <Card className={classes.cardRoot} key={project._id}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={project1}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {project.projectName}
                                            </Typography>
                                            <Typography variant="h5" style={{ color: '#D75D73' }} component="h3">
                                                <LocationOnIcon fontSize='small' /> {project.city}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary" component="h4" className={classes.mt}>
                                                {project.companyName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Precio desde
                                                        </Typography>
                                            <Typography variant="h5" component="h2">
                                                UF{project.price}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Cuota  desde
                                                        </Typography>
                                            <Typography variant="h5" component="h2">
                                                CLP{project.dues}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            startIcon={<ArrowRightAltIcon />}
                                            style={{ backgroundColor: '#D75D73', color: 'white', width: '100%' }}
                                            onClick={() => showProject(project._id)}
                                        >
                                            ver proyecto
                                    </Button>
                                    </CardActions>
                                </Card>
                            )
                        })}
                </>
                :
                <p>No hay proyectos disponibles </p>
            }
        </>
    )
}

export default ProjectList
