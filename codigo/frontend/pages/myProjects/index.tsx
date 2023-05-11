import React from "react";
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import { ProjectCard } from "@/components/projectCard";
import Header from '@/components/header'


const allProjects = () => {

    const navigation = [
        {
            icon: '/burguer.png',
            text: 'All Projects',
            url: '/allProjects'
        },
        {
            icon: '/star.png',
            text: 'My Projects',
            url: '/myProjects'
        },
        {
            icon: '/community.png',
            text: 'Apliccations',
            url: '/application'
        }
    ]

    return (
        <Grid fluid>
            <Header navigation={navigation} active={1} title="Projects" />
            <Row between="xs" center="sm">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                    <ProjectCard />
                ))}
            </Row>
        </Grid>
    )
}

export default allProjects