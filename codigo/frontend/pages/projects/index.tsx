import React, { useEffect, useState } from "react";
import { Col, Row } from 'react-styled-flexboxgrid'
import { ProjectCard } from "@/components/ProjectCard";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import ProjectService from "@/services/project";
import styled from "styled-components";

import burguer from "@/assets/icons/burguer.png"
import star from "@/assets/icons/star.png"
import community from "@/assets/icons/community.png"
import search from "@/assets/icons/search.svg"
import Image from "next/image";
import { StyledInput } from "./styles";
import Modal from "@/components/Modal";
import EditProject from "@/components/EditProject";
import DeleteConfirm from "@/components/DeleteConfirm";

const Projects = () => {
  const navigation = [
    {
      icon: burguer,
      text: "All Projects",
      url: "/projects",
    },
    {
      icon: star,
      text: "My Projects",
      url: "/projects/userId",
    },
    {
      icon: community,
      text: "Apliccations",
      url: "/projects/application",
    },
  ];

  const [projects, setProjects] = useState<any>();
  const [editProjectOpened, setEditProjectOpened] = useState(false);
  const [deleteProjectOpened, setDeleteProjectOpened] = useState(true); //trocar para false depois
  const [removeApplyOpened, setRemoveApplyOpened] = useState(false);

  const getAllProjects = async () => {
    const response = await ProjectService.findAll();
    setProjects(response.data);
  };

  const deleteProject = async () => {
    const id = "1";
    alert("Project " + id + " was successfully deleted.");
  };

  const removeApply = async () => {
    const id = "1";
    alert(
      "Your application to project " +
        id +
        " was canceled, you can send new application at any time."
    );
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <Layout header={navigation} navbar={true} title="Projects" active={0}>
      <Row around="xs" center="sm">
        {/* <Col xs={12} md={6} lg={4}> */}

        <Input placeholder="Search for a title, tag, ..." />

        {projects &&
          projects.map((project: any, index: number) => {
            return <ProjectCard data={project} key={index} />;
          })}

        {projects && projects.length === 0 && (
          <Text color="black">Sem projetos</Text>
        )}

        {editProjectOpened && (
          <Modal
            title="Edit Project"
            closeModal={() => setEditProjectOpened(false)}
            content={<EditProject submit={() => setEditProjectOpened(false)} />}
          />
        )}

        {deleteProjectOpened && (
          <DeleteConfirm
            text='Delete your project "Project1"' //pegar o nome do projeto
            submitText="Delete project"
            cancel={() => setDeleteProjectOpened(false)}
            submit={() => deleteProject()}
          />
        )}

        {removeApplyOpened && (
          <DeleteConfirm
            text='Remove your application to "Project1"' //pegar o nome do projeto
            submitText="Remove Apply"
            cancel={() => setRemoveApplyOpened(false)}
            submit={() => removeApply()}
          />
        )}

        {/* </Col> */}
      </Row>
    </Layout>
  );
}

export const Input = ({ placeholder }: { placeholder: string }) => {
    return (
        <StyledInput middle="xs" center="xs">
            <Col xs={1}>
                <Image src={search} width={16} height={16} alt="Search" />
            </Col>
            <Col xs={11}>
                <input placeholder={placeholder} />
            </Col>
        </StyledInput>
    )
}


export default Projects;