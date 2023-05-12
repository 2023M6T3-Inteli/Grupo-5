import React, { useEffect, useState } from "react";
import { Row } from 'react-styled-flexboxgrid'
import { ProjectCard } from "@/components/projectCard";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import ProjectService from "@/services/projectService";

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
            url: '/allProjects'
        }
    ]

    const [projects, setProjects] = useState<any>()

    const getAllProjects = async () => {
        let response = await ProjectService.findAll()
        setProjects(response.data)
    }

    useEffect(() => {
        getAllProjects()
        
    }, [])

    return (
        <Layout header={navigation} navbar={true} title="Projects" active={0}>
            <Row around="xs" center="sm">
                {
                    projects && projects.map((project: any, index: number) => {
                        return <ProjectCard data={project} key={index} />
                    })
                }
                {
                    !projects && <Text color="black">Sem projetos</Text>
                }
            </Row>
        </Layout>
    )
}

export default allProjects