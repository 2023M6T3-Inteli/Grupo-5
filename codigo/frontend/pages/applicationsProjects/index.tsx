import React from "react";
import styles from './styles.module.scss';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { ProjectCard } from '@/components/projectCard';
import Header from '@/components/header';

import burguer from "@/assets/icons/burguer.png"
import star from "@/assets/icons/star.png"
import community from "@/assets/icons/community.png"


const applicationprojects = () => {

    const navigation = [
        {
            icon: burguer,
            text: 'All Posts',
            url: '/'
        },
        {
            icon: star,
            text: 'Recommended',
            url: '/recommended'
        },
        {
            icon: community,
            text: 'Community',
            url: '/community'
        }
    ]

    return (
        <Grid fluid>
            <Header navigation={navigation} active={1} title="Projects" />
            <Row between="xs" center="sm">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                    <ProjectCard data={{ id: 1, name: "", tags: [] }} />
                ))}
            </Row>
        </Grid>
    )
}

export default applicationprojects;