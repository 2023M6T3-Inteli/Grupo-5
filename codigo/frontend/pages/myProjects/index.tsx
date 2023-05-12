import React from "react";
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import { ProjectCard } from "@/components/projectCard";
import Header from '@/components/header'
import { Layout } from "@/components/Layout";


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

    const projects = [
        {
            id: 1,
            name: 'Project Name',
            tags: ['1', '2', '3']
        },
        {
            id: 2,
            name: 'Project Name 2',
            tags: ['1', '5', '7']
        },
        {
            id: 3,
            name: 'Project Name 3',
            tags: ['1', '2', '3']
        }
    ]

    return (
        <Layout header={navigation} navbar={true} title="Projects">
            <Row between="xs" center="sm">
                {
                    projects.map((project: any, index: number) => {
                        return <ProjectCard data={project} key={index} />
                    })
                }
            </Row>
        </Layout>
    )
}

export default allProjects