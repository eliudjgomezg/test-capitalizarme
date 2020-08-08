import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import injectContext, { Context } from "./store/appContext";

import { projects } from './mocks/projects'
import Nav from './shared/components/nav';
import Projects from './views/projects'
import ProyectDetail from './views/project_detail'
import HelloView from './views/helloView'

const Layout = () => {
	const { actions, store } = useContext(Context);
	const [projectList, setProjectList] = useState([])

	useEffect(() => {
		setProjectList(projects)
	}, [])
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path="/">
					<HelloView />
				</Route>
				<Route exact path="/projects">
					<Projects
						projectList={projectList}
					/>
				</Route>
				<Route path="/proyectDetail/:id">
					<ProyectDetail projectList={projectList} />
				</Route>
				<Route render={() => <h1>Not found!</h1>} />
			</Switch>
		</>
	);
}

export default injectContext(Layout);