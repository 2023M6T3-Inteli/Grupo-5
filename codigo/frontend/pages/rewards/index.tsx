import React from "react"
import styles from "./styles.module.scss"
import { Col, Row } from "react-styled-flexboxgrid"
import { Layout } from "@/components/Layout"

const Rewards = () => {
  const navigation = [
    {
      icon: "/burguer.png",
      text: "Challenges",
      url: "/rewards",
    },
    {
      icon: "/community.png",
      text: "Ranking",
      url: "/ranking",
    },
  ];

  return (
    <Layout header={navigation} navbar={true} active={0}>
      <Col xs={12} md={6} lg={4} className={styles.container}>
        <Row className={styles.titleRow} between="xs">
          <div className={styles.taskTitle}>Daily Tasks</div>
          <div className={styles.taskTitle}>My Points: 450</div>
        </Row>

        <Row className={styles.row} middle="xs" around="xs">
          <Col xs={2} className={styles.iconContainer}>
            <img src="post.svg" />
          </Col>

          <Col xs={8}>Create a new publication</Col>

          <Col xs={2}>
            <div className={styles.imageContainer}>
              <img src="estrela.svg" />
              <p>10</p>
            </div>
          </Col>
        </Row>

        <Row className={styles.row} middle="xs" around="xs">
          <Col xs={2} className={styles.iconContainer}>
            <img src="celular.svg" />
          </Col>
          <Col xs={8}>Like at least 5 posts</Col>
          <Col xs={2}>
            <div className={styles.imageContainer}>
              <img src="estrela.svg" />
              <p>10</p>
            </div>
          </Col>
        </Row>

        <Row className={styles.row} middle="xs" around="xs">
          <Col xs={2} className={styles.iconContainer}>
            <div className={styles.imageContainer}>
              <img src="pasta.svg" />
            </div>
          </Col>
          <Col xs={8}>Submit a new project</Col>
          <Col xs={2}>
            <div className={styles.imageContainer}>
              <img src="estrela.svg" />
              <p>10</p>
            </div>
          </Col>
        </Row>

        <Row className={styles.row} middle="xs" around="xs">
          <Col xs={2} className={styles.iconContainer}>
            <img src="maosdadas.svg" />
          </Col>
          <Col xs={8}>
            <p>Apply to a project</p>
          </Col>
          <Col xs={2}>
            <div className={styles.imageContainer}>
              <img src="estrela.svg" />
              <p>10</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default Rewards;
