import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SkillsComponent from '../components/SkillsComponent'
import PreviousJobsComponent from '../components/PreviousJobsComponent'

const routesConfig = createBrowserRouter([
    {
        path: '/skills',
        element: <SkillsComponent/>
    },
    {
        path: '/experience',
        element: <PreviousJobsComponent/>
    }
]);

const routes = routesConfig;

export default routes;