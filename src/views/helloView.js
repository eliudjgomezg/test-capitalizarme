import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import AppModal from '../shared/components/appModal'

function HelloView(props) {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)

    const goToProject = () => {
        setIsOpen(false)
        history.push('/projects')
    }
    const goBack = () => {
        setIsOpen(false)
        history.push('/')
        setIsOpen(true)
    }

    useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <AppModal
            isOpen={isOpen}
            header={'Hola Amigos de Capitalizarme'}
            action={goToProject}
            onClose={goBack}
        >
            <p>
                Junto con saludarles les remito mi prueba para la vacante de desarrollador front end.
            </p>
            <p>
                En el test se empleo ReactJS como libreria Front end, materialUI como framework CSS y react router dom como libreria para el ruteo de la app.
            </p>
            <p>
                La aplicacion muestra proyectos seteados con data fake  y esta permite vizualizarlos como lista completa y vizualizar de forma individual.
            </p>
            <p>
                Uno de los retos principales de la prueba fue el filtrado de los proyectos. Lo podremos hacer por nombre, ciudad, rango de precios y rango de cuotas mensuales.
            </p>
            <p>
                Espero les guste y si, la puedes vizualizar por smartphone, ya que es completamente responvive design.
            </p>
        </AppModal>
    )
}

export default HelloView
