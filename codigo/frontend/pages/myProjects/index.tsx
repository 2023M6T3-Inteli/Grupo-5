import React from "react";
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import { ProjectCard } from "@/components/projectCard";
import Header from '@/components/header'
import { Layout } from "@/components/Layout";

import burguer from "@/assets/icons/burguer.png"
import star from "@/assets/icons/star.png"
import community from "@/assets/icons/community.png"

const allProjects = () => {

    const navigation = [
        {
            icon: burguer,
            text: 'All Projects',
            url: '/allProjects'
        },
        {
            icon: star,
            text: 'My Projects',
            url: '/myProjects'
        },
        {
            icon: community,
            text: 'Apliccations',
            url: '/allProjects'
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
        <Layout header={navigation} navbar={true} title="Projects" active={1}>
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