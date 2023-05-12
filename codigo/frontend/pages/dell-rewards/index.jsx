import React from 'react'
import styles from './styles.module.scss'
import { Col, Grid, Row } from 'react-styled-flexboxgrid'

const DellRewards = () => {
    return (
        <Grid>
            <div className={styles.container}>
                <Row between='xs'>
                    <div className={styles.taskTitle}>Daily Tasks</div>
                    <div className={styles.taskTitle}>My Points: 450</div>
                </Row>

                <Row className={styles.row} middle='xs' around='xs'>
                    <Col>
                        <img src="post.svg" />
                    </Col>
                    <Col>
                        Create a new publication
                    </Col>
                    <Col>
                        <div className={styles.imageContainer}>
                            <img src="estrela.svg" />
                            <p>10</p>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.row} middle='xs' around='xs'>
                    <Col>
                        <img src="celular.svg" />
                    </Col>
                    <Col>
                        Like at least 5 posts
                    </Col>
                    <Col>
                        <div className={styles.imageContainer}>
                            <img src="estrela.svg" />
                            <p>10</p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.row} middle='xs' around='xs'>
                    <Col>
                        <div className={styles.imageContainer}>
                            <img src="pasta.svg" />
                        </div>
                    </Col>
                    <Col>
                        Submit a new project
                    </Col>
                    <Col>
                        <div className={styles.imageContainer}>
                            <img src="estrela.svg" />
                            <p>10</p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.row} middle='xs' around='xs'>
                    <Col>
                        <img src="maosdadas.svg" />
                    </Col>
                    <Col>
                        <p>Apply to a project</p>
                    </Col>
                    <Col>
                        <div className={styles.imageContainer}>
                            <img src="estrela.svg" />
                            <p>10</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Grid>
    );
};

export default DellRewards;
