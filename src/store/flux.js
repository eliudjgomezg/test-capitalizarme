const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            projects: []
        },

        actions: {
            setProjects: (proyectsList) => {
                setStore({ projects: proyectsList })
            }
        }
    }
}
export default getState;