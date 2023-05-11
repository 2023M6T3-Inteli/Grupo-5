import React from "react";
import { Col, Row } from "react-styled-flexboxgrid";
import styles from './styles.module.scss'
import Image from "next/image";
import matchIcon from '@/assets/matchIcon.jpg'
import lamp from "@/assets/lamp.svg"
import { Tags } from "@/components/tags";


export const ProjectCard = () => {
    return (
        <Col xs={12} md={5} className={styles.cardProject}>
            <Col xs={12} className={styles.contentCard}>
                <Row className={styles.higher}>
                    <Col xs={8} className={styles.cardBackOffice}>
                        <p>Backoffice</p>
                        <p>Duration:</p> {/*INTEGRAÇÃO */}
                        <p>Area:</p> {/*INTEGRAÇÃO */}
                    </Col>
                    <Col xs={4} className={styles.cardDeadline}>
                        <p>Applications Open!</p>
                        <p>Deadline:</p>
                    </Col>
                </Row>

                <Row className={styles.bottom}>
                    <Col xs={8} className={styles.cardTags}>
                        {
                            ['tag1', 'tag2', 'tag3'].map((item, index) => (
                                <Tags text="olá mundo" /> // INTEGRAÇÃO DE TAGS 
                            ))
                        }
                    </Col>

                    <Col xs={4} className={styles.cardMatch}>
                        <Image src={lamp} width={24} alt="lamp" />
                        <p>Match!</p>
                    </Col>
                </Row>
            </Col>
        </Col>
    )
}
