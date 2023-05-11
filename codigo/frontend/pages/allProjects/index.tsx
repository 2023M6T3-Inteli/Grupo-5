import React from "react";
import { Col, Grid, Row } from 'react-styled-flexboxgrid'
import { ProjectCard } from "@/components/projectCard";


const allProjects = () => {
    return (
        <Grid fluid>
            <Row between="xs" center="sm">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                    <ProjectCard />
                ))}
            </Row>
        </Grid>
    )
}

export default allProjects