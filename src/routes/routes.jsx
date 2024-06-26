import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SkillsComponent from '../components/SkillsComponent'
import PreviousJobsComponent from '../components/PreviousJobsComponent'
import ProjectsComponent from '../components/ProjectsComponent';
import HomeComponent from '../components/HomeComponent';
import ContactComponent from '../components/ContactComponent';

const routesConfig = createBrowserRouter([
    {
        path: '/',
        element: <HomeComponent/>
    },
    {
        path: '/skills',
        element: <SkillsComponent/>,
    },
    {
        path: '/experience',
        element: <PreviousJobsComponent/>
    },
    {
        path: '/projects',
        element: <ProjectsComponent/>
    },
    {
        path: '/contact',
        element: <ContactComponent/>
    }
]);

const routes = routesConfig;

export default routes;