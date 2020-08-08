import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext";
import { useParams, useHistory } from 'react-router-dom';

import project1 from '../assets/project1.jpg'
import AppModal from '../shared/components/appModal'

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, CardActions, Button, CardActionArea, Card, CardMedia, CardContent, Box, Divider
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        width: '100%'
    },
    media: {
        height: 400,
    },
    button: {
        margin: theme.spacing(1),
    },
    mt: {
        marginTop: 10
    },

}));
function ProyectDetail({ projectList }) {
    const classes = useStyles();
    const history = useHistory()
    const { id } = useParams()
    const { actions, store } = useContext(Context);
    const [project, setProject] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const findProject = () => {
        const projectSelected = projectList.find(project => project._id === id)
        setProject(projectSelected)
    }

    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    const submitProject = () => {
        setIsOpen(!isOpen)
        history.push('/projects')
    }

    useEffect(() => {
        if (projectList.length > 0) {
            findProject()
        } else {
            history.push('/')
        }
    }, [])
    return (
        <>
            <Box height={70} />
            <Box px={2}>
                <Card className={classes.cardRoot}>
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
                        <Divider />

                        <Typography variant="h6" color="textSecondary" component="h4" className={classes.mt}>
                            Direccion
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {project.address}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h4" className={classes.mt}>
                            Descripcion del proyecto
                    </Typography>
                        <Typography variant="h5" component="h2">
                            {project.description}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {project.description}
                        </Typography>
                    </CardActionArea>

                    <CardActions>
                    <Button
                            variant="contained"
                            
                            className={classes.button}
                            startIcon={<KeyboardReturnIcon />}
                            fullWidth
                            onClick={() => history.push('/projects')}
                        >
                            volver
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<ArrowRightAltIcon />}
                            style={{ backgroundColor: '#D75D73', color: 'white', width: '100%' }}
                            onClick={handleModal}
                        >
                            Agenda hoy
                        </Button>
                        
                    </CardActions>
                </Card>
            </Box>
            <AppModal isOpen={isOpen} header={'Felicidades, estas a un paso obtener tu propiedad'} action={submitProject} onClose={handleModal}>
                Nuestra misión es cambiarle la vida a las personas a través de la inversión en departamentos, buscando sectores estratégicos, promociones y cómodas condiciones para lograrlo.
                Te estaremos contactando a la brevedad posible, gracias por preferirnos
            </AppModal>
        </>
    )
}

export default ProyectDetail
