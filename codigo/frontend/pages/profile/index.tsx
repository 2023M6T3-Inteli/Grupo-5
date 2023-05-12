import React from "react";
import styles from "./styles.module.scss";
import profileImage from "@/assets/icons/profileImage.svg";
import mode_edit from "@/assets/icons/mode_edit.svg";
import delete_forever from "@/assets/icons/delete_forever.svg";
import Image from "next/image";
import { Col, Row } from "react-styled-flexboxgrid";
import { Layout } from "@/components/Layout";



const Profile = () => {
  return (
    <Layout header={false} navbar={true}>
    <div className={styles.container}>
        <Row className={styles.row} center="xs">
          <h1>Profile</h1>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Image
              src={profileImage}
              width={56}
              height={56}
              alt="Imagem do perfil"
            />
          </Col>
          <Col>
            <h3>Carlos</h3>
            <h5>Back-end Developer</h5>
          </Col>
        </Row>
        <Row>
          <h3>Pontuação</h3>
        </Row>
        <Row className={styles.row}>
          <div>1234 pontos</div>
        </Row>
        <Row>
            <h3>About me</h3>
          <Col>
            <Image src={mode_edit} alt="ícone de edição" />
          </Col>
        </Row>
        <Row className={styles.row}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Row>
        <Row>
          <h3>Interests</h3>
          <Col>
            <Image src={mode_edit} alt="ícone de edição" />
          </Col>
        </Row>
        <Row className={styles.row}>
          <div>tag</div>
        </Row>
        <Row className={styles.row} around="xs">
          <Col className={styles.col}>
            <h3>Projects</h3>
          </Col>
          <Col>
            <h3>Publications</h3>
          </Col>
        </Row>
        <Row>
          <div className={styles.card}>
            <h4>Frontend Develoment</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              porro similique aliquid debitis ipsam soluta dolorum ipsa!
              Voluptate, suscipit iure.
            </p>
            
            <Row className="image" end="xs">
              <Image
                className="image"
                src={delete_forever}
                alt="ícone de edição"
              />
            </Row>
          </div>
        </Row>
    </div>
    </Layout>
  );
};

export default Profile;
